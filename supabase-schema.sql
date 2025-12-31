-- OpenPages Database Schema for Supabase
-- Run this in your Supabase SQL Editor after creating your project

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create enum for user roles
CREATE TYPE user_role AS ENUM ('applicant', 'recruiter', 'admin');

-- Create profiles table
CREATE TABLE profiles (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  personal_info JSONB NOT NULL DEFAULT '{}'::jsonb,
  skills JSONB NOT NULL DEFAULT '[]'::jsonb,
  experience JSONB NOT NULL DEFAULT '[]'::jsonb,
  projects JSONB NOT NULL DEFAULT '[]'::jsonb,
  is_published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id)
);

-- Create profile_views table (for tracking recruiter views)
CREATE TABLE profile_views (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  profile_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  viewer_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  viewed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX idx_profiles_user_id ON profiles(user_id);
CREATE INDEX idx_profiles_is_published ON profiles(is_published);
CREATE INDEX idx_profile_views_profile_id ON profile_views(profile_id);
CREATE INDEX idx_profile_views_viewer_id ON profile_views(viewer_id);

-- Create a function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to auto-update updated_at
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS) Policies

-- Enable RLS on tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE profile_views ENABLE ROW LEVEL SECURITY;

-- Profiles policies

-- Anyone can view published profiles
CREATE POLICY "Published profiles are viewable by everyone"
  ON profiles FOR SELECT
  USING (is_published = true);

-- Users can view their own profile (published or not)
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = user_id);

-- Users can insert their own profile
CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Users can update their own profile
CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Users can delete their own profile
CREATE POLICY "Users can delete own profile"
  ON profiles FOR DELETE
  USING (auth.uid() = user_id);

-- Profile views policies

-- Anyone can view profile views (for analytics)
CREATE POLICY "Profile views are viewable by profile owner"
  ON profile_views FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = profile_views.profile_id
      AND profiles.user_id = auth.uid()
    )
  );

-- Authenticated users can insert profile views
CREATE POLICY "Authenticated users can insert profile views"
  ON profile_views FOR INSERT
  WITH CHECK (auth.uid() = viewer_id);

-- Create a function to get user role from metadata
CREATE OR REPLACE FUNCTION get_user_role(user_id UUID)
RETURNS user_role AS $$
DECLARE
  role TEXT;
BEGIN
  SELECT raw_user_meta_data->>'role' INTO role
  FROM auth.users
  WHERE id = user_id;

  RETURN role::user_role;
EXCEPTION
  WHEN OTHERS THEN
    RETURN 'applicant'::user_role;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create a view for easier profile querying with user data
CREATE OR REPLACE VIEW profiles_with_user AS
SELECT
  p.*,
  u.email,
  u.raw_user_meta_data->>'role' as user_role,
  u.raw_user_meta_data->>'full_name' as user_full_name
FROM profiles p
JOIN auth.users u ON p.user_id = u.id;

-- Grant access to the view
GRANT SELECT ON profiles_with_user TO authenticated;
GRANT SELECT ON profiles_with_user TO anon;
