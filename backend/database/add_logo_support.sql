-- Add logo_url column to companies table
ALTER TABLE public.companies ADD COLUMN IF NOT EXISTS logo_url TEXT;

-- Create storage bucket for company logos
INSERT INTO storage.buckets (id, name, public) 
VALUES ('company-logos', 'company-logos', true)
ON CONFLICT (id) DO NOTHING;

-- Enable RLS for storage objects if not already enabled
ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

-- Allow public read access to company logos
CREATE POLICY "Public Access" ON storage.objects 
FOR SELECT 
USING ( bucket_id = 'company-logos' );

-- Allow public upload access (since we handle auth loosely for now, restrict in production)
-- In a real app, you'd check auth.uid() or similar
CREATE POLICY "Allow Uploads" ON storage.objects 
FOR INSERT 
WITH CHECK ( bucket_id = 'company-logos' );

-- Allow updates/deletes if needed
CREATE POLICY "Allow Updates" ON storage.objects 
FOR UPDATE 
USING ( bucket_id = 'company-logos' );
