-- Migration pour ajouter la table customer_types et migrer les données existantes
-- Cette migration permet de centraliser la gestion des types de clients

-- 1. Créer la table customer_types
CREATE TABLE customer_types (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    code VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    is_active BOOLEAN DEFAULT TRUE
);

-- 2. Insérer les types de clients par défaut
INSERT INTO customer_types (code, name, description) VALUES
    ('individual', 'Particulier', 'Client particulier'),
    ('professional', 'Professionnel', 'Entreprise ou professionnel'),
    ('syndic', 'Syndic', 'Syndic de copropriété');

-- 3. Ajouter la colonne customer_type_id à la table customers
ALTER TABLE customers 
ADD COLUMN customer_type_id UUID;

-- 4. Mettre à jour les données existantes
UPDATE customers 
SET customer_type_id = (
    SELECT id FROM customer_types 
    WHERE code = customers.type
);

-- 5. Rendre la colonne customer_type_id obligatoire
ALTER TABLE customers 
ALTER COLUMN customer_type_id SET NOT NULL;

-- 6. Ajouter la contrainte de clé étrangère
ALTER TABLE customers 
ADD CONSTRAINT customers_customer_type_id_fkey 
FOREIGN KEY (customer_type_id) REFERENCES customer_types(id);

-- 7. Supprimer l'ancienne colonne type
ALTER TABLE customers 
DROP COLUMN type;

-- 8. Créer un index unique pour (company_id, first_name, last_name)
-- Note: On utilise COALESCE pour gérer les NULLs et s'assurer que l'unicité fonctionne même si un champ est vide
CREATE UNIQUE INDEX idx_customers_unique_person ON customers (company_id, COALESCE(first_name, ''), COALESCE(last_name, ''));

-- 9. Créer un index pour améliorer les performances
CREATE INDEX idx_customers_customer_type_id ON customers(customer_type_id);