-- ============================================
-- S P V Plastchem (Pvt) Ltd - Database Schema
-- Run this in Supabase SQL Editor
-- ============================================

-- Products table
CREATE TABLE IF NOT EXISTS products (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    description TEXT,
    image_url TEXT,
    specifications JSONB,
    applications TEXT[],
    is_active BOOLEAN DEFAULT true,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Inquiries table
CREATE TABLE IF NOT EXISTS inquiries (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    company VARCHAR(255),
    phone VARCHAR(50),
    product_category VARCHAR(100),
    message TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'new',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Brochures table
CREATE TABLE IF NOT EXISTS brochures (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    file_url TEXT NOT NULL,
    file_size INTEGER,
    product_category VARCHAR(100),
    uploaded_at TIMESTAMPTZ DEFAULT NOW()
);

-- Admin profiles (extends Supabase auth.users)
CREATE TABLE IF NOT EXISTS admin_profiles (
    id UUID REFERENCES auth.users(id) PRIMARY KEY,
    role VARCHAR(50) DEFAULT 'admin',
    display_name VARCHAR(255),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Announcements table
CREATE TABLE IF NOT EXISTS announcements (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    is_published BOOLEAN DEFAULT false,
    published_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- Auto-update timestamp trigger
-- ============================================
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER products_updated_at
    BEFORE UPDATE ON products
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at();

-- ============================================
-- Row Level Security Policies
-- ============================================
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE brochures ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE announcements ENABLE ROW LEVEL SECURITY;

-- Products: public read, admin write
CREATE POLICY "Products viewable by everyone"
    ON products FOR SELECT USING (is_active = true);

CREATE POLICY "Admins manage products"
    ON products FOR ALL USING (
        auth.uid() IN (SELECT id FROM admin_profiles)
    );

-- Inquiries: anyone can submit, admin can read/update
CREATE POLICY "Anyone can submit inquiries"
    ON inquiries FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins view inquiries"
    ON inquiries FOR SELECT USING (
        auth.uid() IN (SELECT id FROM admin_profiles)
    );

CREATE POLICY "Admins update inquiries"
    ON inquiries FOR UPDATE USING (
        auth.uid() IN (SELECT id FROM admin_profiles)
    );

-- Brochures: public read, admin write
CREATE POLICY "Brochures viewable by everyone"
    ON brochures FOR SELECT USING (true);

CREATE POLICY "Admins manage brochures"
    ON brochures FOR ALL USING (
        auth.uid() IN (SELECT id FROM admin_profiles)
    );

-- Admin profiles: only admins can view
CREATE POLICY "Admin profiles readable by admins"
    ON admin_profiles FOR SELECT USING (
        auth.uid() IN (SELECT id FROM admin_profiles)
    );

-- Announcements: published ones public, admin manages all
CREATE POLICY "Published announcements viewable"
    ON announcements FOR SELECT USING (is_published = true);

CREATE POLICY "Admins manage announcements"
    ON announcements FOR ALL USING (
        auth.uid() IN (SELECT id FROM admin_profiles)
    );

-- ============================================
-- Create storage bucket for documents
-- ============================================
INSERT INTO storage.buckets (id, name, public)
VALUES ('documents', 'documents', true)
ON CONFLICT (id) DO NOTHING;
