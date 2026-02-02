-- Mise à jour de la table customers pour la réforme de la facturation électronique 2026
-- Ajout des champs obligatoires pour le B2B (SIRET, TVA, Adresse de livraison)

ALTER TABLE public.customers 
ADD COLUMN IF NOT EXISTS siret TEXT,
ADD COLUMN IF NOT EXISTS vat_number TEXT,
ADD COLUMN IF NOT EXISTS delivery_address TEXT,
ADD COLUMN IF NOT EXISTS delivery_city TEXT,
ADD COLUMN IF NOT EXISTS delivery_zip_code TEXT,
ADD COLUMN IF NOT EXISTS payment_terms TEXT;

COMMENT ON COLUMN public.customers.siret IS 'Numéro SIRET (Obligatoire pour B2B - Facturation électronique)';
COMMENT ON COLUMN public.customers.vat_number IS 'Numéro de TVA Intracommunautaire';
COMMENT ON COLUMN public.customers.delivery_address IS 'Adresse de livraison si différente de la facturation';
COMMENT ON COLUMN public.customers.payment_terms IS 'Conditions de paiement (ex: 30 jours, Comptant)';
