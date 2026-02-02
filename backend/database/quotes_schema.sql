-- Table pour les devis (Quotes)
CREATE TABLE IF NOT EXISTS public.quotes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    company_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
    customer_id UUID NOT NULL REFERENCES public.customers(id) ON DELETE CASCADE,
    quote_number TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'sent', 'signed', 'rejected', 'invoiced', 'cancelled')),
    
    -- Montants
    total_ht DECIMAL(12,2) NOT NULL DEFAULT 0,
    tva_rate DECIMAL(5,2) NOT NULL DEFAULT 20.0,
    total_tva DECIMAL(12,2) NOT NULL DEFAULT 0,
    total_ttc DECIMAL(12,2) NOT NULL DEFAULT 0,
    
    -- Dates
    issued_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    valid_until TIMESTAMP WITH TIME ZONE,
    signed_at TIMESTAMP WITH TIME ZONE,
    
    -- Signature électronique (Option 1: Interne)
    signature_data TEXT, -- Base64 image
    signer_name TEXT,
    signer_ip TEXT,
    signing_metadata JSONB, -- Pour stocker horodatage, user agent, etc.
    
    notes TEXT,
    terms TEXT,
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Table pour les lignes de devis (Quote Items)
CREATE TABLE IF NOT EXISTS public.quote_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    quote_id UUID NOT NULL REFERENCES public.quotes(id) ON DELETE CASCADE,
    description TEXT NOT NULL,
    quantity DECIMAL(10,2) NOT NULL DEFAULT 1,
    unit_price DECIMAL(12,2) NOT NULL DEFAULT 0,
    tva_rate DECIMAL(5,2) NOT NULL DEFAULT 20.0,
    total_ht DECIMAL(12,2) NOT NULL DEFAULT 0,
    item_type TEXT DEFAULT 'service' CHECK (item_type IN ('service', 'material')),
    unit TEXT DEFAULT 'unité',
    
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Index pour les performances
CREATE INDEX IF NOT EXISTS idx_quotes_company_id ON public.quotes(company_id);
CREATE INDEX IF NOT EXISTS idx_quotes_customer_id ON public.quotes(customer_id);
CREATE INDEX IF NOT EXISTS idx_quote_items_quote_id ON public.quote_items(quote_id);

-- Trigger pour updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

DROP TRIGGER IF EXISTS update_quotes_updated_at ON public.quotes;
CREATE TRIGGER update_quotes_updated_at
    BEFORE UPDATE ON public.quotes
    FOR EACH ROW
    EXECUTE PROCEDURE update_updated_at_column();
