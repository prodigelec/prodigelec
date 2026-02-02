-- Add intervention address and contact columns to quotes table
DO $$
BEGIN
    -- Add intervention_address if missing
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'quotes' AND column_name = 'intervention_address') THEN
        ALTER TABLE public.quotes ADD COLUMN intervention_address TEXT;
    END IF;

    -- Add intervention_contact if missing
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'quotes' AND column_name = 'intervention_contact') THEN
        ALTER TABLE public.quotes ADD COLUMN intervention_contact TEXT;
    END IF;
END $$;

-- Force schema cache reload for PostgREST
NOTIFY pgrst, 'reload schema';
