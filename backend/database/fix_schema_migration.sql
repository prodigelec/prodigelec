-- Complete fix for quote_items table columns
DO $$
BEGIN
    -- 1. Add item_type if missing
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'quote_items' AND column_name = 'item_type') THEN
        ALTER TABLE public.quote_items ADD COLUMN item_type TEXT DEFAULT 'service' CHECK (item_type IN ('service', 'material'));
    END IF;

    -- 2. Add unit if missing
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'quote_items' AND column_name = 'unit') THEN
        ALTER TABLE public.quote_items ADD COLUMN unit TEXT DEFAULT 'unité';
    END IF;

    -- 3. Add sort_order if missing
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'quote_items' AND column_name = 'sort_order') THEN
        ALTER TABLE public.quote_items ADD COLUMN sort_order INTEGER DEFAULT 0;
    END IF;
END $$;

-- Force schema cache reload for PostgREST (Supabase API)
NOTIFY pgrst, 'reload schema';
