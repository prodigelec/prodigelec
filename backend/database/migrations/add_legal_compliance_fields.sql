-- Migration: Ajout des champs de conformité légale pour devis
-- Date: 2026-02-02
-- Description: Ajoute les champs assurance décennale, SIRET client, et adresse intervention

-- ============================================
-- 1. TABLE COMPANIES - Assurance Décennale
-- ============================================
ALTER TABLE public.companies 
ADD COLUMN IF NOT EXISTS decennale_number TEXT;

ALTER TABLE public.companies 
ADD COLUMN IF NOT EXISTS decennale_company TEXT;

ALTER TABLE public.companies 
ADD COLUMN IF NOT EXISTS decennale_validity DATE;

ALTER TABLE public.companies 
ADD COLUMN IF NOT EXISTS capital TEXT;

ALTER TABLE public.companies 
ADD COLUMN IF NOT EXISTS rcs_number TEXT;

COMMENT ON COLUMN public.companies.decennale_number IS 'Numéro attestation assurance décennale';
COMMENT ON COLUMN public.companies.decennale_company IS 'Nom de la compagnie d''assurance';
COMMENT ON COLUMN public.companies.decennale_validity IS 'Date de validité de l''attestation';
COMMENT ON COLUMN public.companies.capital IS 'Capital social de l''entreprise';
COMMENT ON COLUMN public.companies.rcs_number IS 'Numéro RCS';

-- ============================================
-- 2. TABLE CUSTOMERS - SIRET et TVA client pro
-- ============================================
ALTER TABLE public.customers 
ADD COLUMN IF NOT EXISTS siret TEXT;

ALTER TABLE public.customers 
ADD COLUMN IF NOT EXISTS vat_number TEXT;

COMMENT ON COLUMN public.customers.siret IS 'Numéro SIRET du client professionnel';
COMMENT ON COLUMN public.customers.vat_number IS 'Numéro TVA intracommunautaire du client';

-- ============================================
-- 3. TABLE QUOTES - Adresse d'intervention
-- ============================================
ALTER TABLE public.quotes 
ADD COLUMN IF NOT EXISTS intervention_address TEXT;

ALTER TABLE public.quotes 
ADD COLUMN IF NOT EXISTS intervention_city TEXT;

ALTER TABLE public.quotes 
ADD COLUMN IF NOT EXISTS intervention_zip_code TEXT;

COMMENT ON COLUMN public.quotes.intervention_address IS 'Adresse du chantier (si différente du client)';
COMMENT ON COLUMN public.quotes.intervention_city IS 'Ville du chantier';
COMMENT ON COLUMN public.quotes.intervention_zip_code IS 'Code postal du chantier';

-- ============================================
-- Confirmation
-- ============================================
SELECT 'Migration completed successfully' AS status;
