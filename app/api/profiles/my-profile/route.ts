import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

// GET /api/profiles/my-profile - Get current user's profile
export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { data: profile, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', user.id)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return NextResponse.json({ error: 'Profile not found' }, { status: 404 });
      }
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ profile });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PUT /api/profiles/my-profile - Update current user's profile
export async function PUT(request: NextRequest) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { personal_info, skills, experience, projects, is_published } = body;

    // Try to update existing profile
    const { data: profile, error } = await supabase
      .from('profiles')
      .update({
        personal_info,
        skills,
        experience,
        projects,
        is_published,
      })
      .eq('user_id', user.id)
      .select()
      .single();

    if (error) {
      // If profile doesn't exist, create it
      if (error.code === 'PGRST116') {
        const { data: newProfile, error: createError } = await supabase
          .from('profiles')
          .insert({
            user_id: user.id,
            personal_info,
            skills,
            experience,
            projects,
            is_published,
          })
          .select()
          .single();

        if (createError) {
          return NextResponse.json({ error: createError.message }, { status: 500 });
        }

        return NextResponse.json({ profile: newProfile }, { status: 201 });
      }

      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ profile });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
