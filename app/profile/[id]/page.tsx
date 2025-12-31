'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Profile from '@/components/Profile';
import AppShell from '@/components/AppShell';

export default function ProfilePage() {
    const params = useParams();
    const id = params?.id as string;
    const [profile, setProfile] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadProfile = async () => {
            if (!id) {
                setError('No profile ID provided');
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(`/api/profiles/${id}`);

                if (!response.ok) {
                    if (response.status === 404) {
                        setError('Profile not found');
                    } else {
                        setError('Failed to load profile');
                    }
                    setLoading(false);
                    return;
                }

                const data = await response.json();
                if (data.profile) {
                    // Map database structure to component structure
                    setProfile({
                        personalInfo: data.profile.personal_info,
                        skills: data.profile.skills,
                        experience: data.profile.experience,
                        projects: data.profile.projects,
                    });
                }
            } catch (err) {
                console.error('Error loading profile:', err);
                setError('Failed to load profile');
            } finally {
                setLoading(false);
            }
        };

        loadProfile();
    }, [id]);

    if (loading) {
        return (
            <AppShell>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                    <p>Loading profile...</p>
                </div>
            </AppShell>
        );
    }

    if (error || !profile) {
        return (
            <AppShell>
                <div style={{ padding: 50, textAlign: 'center' }}>{error || 'Profile not found'}</div>
            </AppShell>
        );
    }

    return (
        <AppShell>
            <div className="preview-pane" style={{ padding: 0, justifyContent: 'center', background: '#555' }}>
                <div style={{ transform: 'scale(0.9)', transformOrigin: 'top center', marginTop: 40 }}>
                    <Profile profile={profile} />
                </div>
            </div>
        </AppShell>
    );
}
