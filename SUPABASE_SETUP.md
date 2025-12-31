# Supabase Setup Guide for OpenPages

## Step 1: Create Supabase Project

1. Go to https://supabase.com and sign in
2. Click "New Project"
3. Fill in:
   - **Name:** `openpages-profile`
   - **Database Password:** (create a strong password and save it)
   - **Region:** Choose closest to you
4. Click "Create new project" and wait for setup

## Step 2: Get API Credentials

1. In your Supabase dashboard, go to **Project Settings** (⚙️ icon)
2. Click **API** in the sidebar
3. Copy these two values:
   - **Project URL** (e.g., `https://xxxxx.supabase.co`)
   - **anon public** key (the long JWT token)

## Step 3: Configure Environment Variables

1. In your project root, create a file named `.env.local`
2. Add your credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url-here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

3. Replace `your-project-url-here` and `your-anon-key-here` with your actual values

## Step 4: Create Database Tables

1. In Supabase dashboard, click **SQL Editor** in the sidebar
2. Click **New Query**
3. Copy the entire contents of `supabase-schema.sql` file
4. Paste it into the SQL editor
5. Click **Run** (or press Ctrl/Cmd + Enter)
6. You should see "Success. No rows returned"

## Step 5: Configure Authentication

1. In Supabase dashboard, go to **Authentication** → **Providers**
2. Make sure **Email** provider is enabled
3. Configure settings:
   - **Enable Email provider:** ✅ ON
   - **Confirm email:** ⬜ OFF (for development, you can enable later)
   - **Secure email change:** ✅ ON (recommended)

## Step 6: Verify Setup

Check that these tables were created in **Database** → **Tables**:
- ✅ `profiles`
- ✅ `profile_views`

## Database Schema Overview

### Tables

#### `profiles`
Stores user profile data including:
- Personal information (name, title, contact, socials, summary)
- Skills (categorized array)
- Work experience
- Projects
- Published status

#### `profile_views`
Tracks when recruiters view profiles for analytics.

### Security

Row Level Security (RLS) is enabled:
- Published profiles are public
- Users can only edit their own profiles
- Profile views are tracked per user

### User Roles

Users have a `role` stored in their metadata:
- `applicant` - Can create and manage their profile
- `recruiter` - Can view and search profiles
- `admin` - Full access (future use)

## Next Steps

After completing setup, you can:
1. Run `npm run dev` to start the development server
2. Create an account at http://localhost:3000/register
3. Login and create your profile
4. Test the authentication flow

## Troubleshooting

### "Invalid API key" error
- Check that `.env.local` is in the project root
- Verify the credentials are correct (no extra spaces)
- Restart the dev server after creating `.env.local`

### "relation does not exist" error
- Make sure you ran the SQL schema in Step 4
- Check the SQL Editor for any error messages

### Authentication not working
- Verify Email provider is enabled in Auth settings
- Check browser console for error messages
- Make sure middleware.ts is in the project root
