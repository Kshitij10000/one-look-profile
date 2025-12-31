'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Editor from '@/components/Editor';
import Profile from '@/components/Profile';
import { defaultProfile } from '@/lib/schema';
import AppShell from '@/components/AppShell';

export default function CreatePage() {
    const [currentProfile, setCurrentProfile] = useState(defaultProfile);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push('/login');
        } else if (user.role !== 'applicant') {
            router.push('/');
        } else {
            loadProfile();
        }
    }, [user, router]);

    const loadProfile = async () => {
        try {
            const response = await fetch('/api/profiles/my-profile');

            if (response.ok) {
                const data = await response.json();
                if (data.profile) {
                    // Map database structure to component structure
                    setCurrentProfile({
                        personalInfo: data.profile.personal_info,
                        skills: data.profile.skills,
                        experience: data.profile.experience,
                        projects: data.profile.projects,
                    });
                }
            } else if (response.status === 404) {
                // No profile exists yet, use default
                setCurrentProfile(defaultProfile);
            }
        } catch (error) {
            console.error('Error loading profile:', error);
        } finally {
            setLoading(false);
        }
    };

    const handlePublish = async (profileToPublish: any) => {
        try {
            setSaving(true);

            const response = await fetch('/api/profiles/my-profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    personal_info: profileToPublish.personalInfo,
                    skills: profileToPublish.skills,
                    experience: profileToPublish.experience,
                    projects: profileToPublish.projects,
                    is_published: true,
                }),
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || 'Failed to publish profile');
            }

            alert('Profile published successfully!');
            router.push('/');
        } catch (error: any) {
            console.error('Error publishing profile:', error);
            alert(error.message || 'Error publishing profile');
        } finally {
            setSaving(false);
        }
    };

    if (!user || user.role !== 'applicant') {
        return null;
    }

    if (loading) {
        return (
            <AppShell>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                    <p>Loading profile...</p>
                </div>
            </AppShell>
        );
    }

    return (
        <AppShell>
            <div className="split-view" style={{ display: 'flex', width: '100%', height: '100%' }}>
                <div className="editor-pane light-mode-forced">
                    <Editor
                        profile={currentProfile}
                        onUpdate={setCurrentProfile}
                        onPublish={handlePublish}
                    />
                </div>
                <div className="preview-pane">
                    <Profile profile={currentProfile} />
                </div>
            </div>
        </AppShell>
    );
}
