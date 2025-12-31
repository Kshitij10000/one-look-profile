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
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push('/login');
        } else if (user.role !== 'applicant') {
            router.push('/');
        }
    }, [user, router]);

    const handlePublish = async (profileToPublish: any) => {
        try {
            // Mock publish - in real app would POST to API
            await new Promise(resolve => setTimeout(resolve, 500));

            alert('Profile published successfully!');
            router.push('/');
        } catch (error) {
            console.error(error);
            alert('Error publishing profile');
        }
    };

    if (!user || user.role !== 'applicant') {
        return null;
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
