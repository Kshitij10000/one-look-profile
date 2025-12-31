import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

// GET /api/profiles - Get all published profiles or user's own profile
export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search');
    const userId = searchParams.get('userId');

    let query = supabase
      .from('profiles')
      .select('*');

    if (userId) {
      // Get specific user's profile
      query = query.eq('user_id', userId);
    } else if (user) {
      // Get user's own profile OR all published profiles
      query = query.or(`user_id.eq.${user.id},is_published.eq.true`);
    } else {
      // Not authenticated - only show published profiles
      query = query.eq('is_published', true);
    }

    // Add search filter if provided
    if (search) {
      // Search in personal_info fields using JSONB queries
      query = query.or(`personal_info->>fullName.ilike.%${search}%,personal_info->>title.ilike.%${search}%`);
    }

    const { data: profiles, error } = await query.order('created_at', { ascending: false });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ profiles });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST /api/profiles - Create a new profile
export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { personal_info, skills, experience, projects, is_published } = body;

    // Check if user already has a profile
    const { data: existingProfile } = await supabase
      .from('profiles')
      .select('id')
      .eq('user_id', user.id)
      .single();

    if (existingProfile) {
      return NextResponse.json(
        { error: 'Profile already exists. Use PUT to update.' },
        { status: 400 }
      );
    }

    const { data: profile, error } = await supabase
      .from('profiles')
      .insert({
        user_id: user.id,
        personal_info,
        skills,
        experience,
        projects,
        is_published: is_published || false,
      })
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ profile }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
