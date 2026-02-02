-- Create customers table
CREATE TABLE public.customers (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    company_id UUID REFERENCES public.companies(id) ON DELETE CASCADE,
    type TEXT NOT NULL CHECK (type IN ('individual', 'professional')),
    first_name TEXT,
    last_name TEXT,
    company_name TEXT, -- Only for professionals
    email TEXT,
    phone TEXT,
    address TEXT,
    city TEXT,
    zip_code TEXT,
    notes TEXT
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.customers ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations for now
CREATE POLICY "Enable read/write for all users" ON public.customers
    FOR ALL
    USING (true)
    WITH CHECK (true);
