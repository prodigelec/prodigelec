-- Create companies table
CREATE TABLE public.companies (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    name TEXT NOT NULL,
    siret TEXT NOT NULL UNIQUE,
    vat_number TEXT,
    address TEXT,
    city TEXT,
    zip_code TEXT,
    email TEXT,
    phone TEXT,
    legal_form TEXT
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.companies ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations for now (since we handle auth in backend)
-- In production, you might want to restrict this further
CREATE POLICY "Enable read/write for all users" ON public.companies
    FOR ALL
    USING (true)
    WITH CHECK (true);
