'use client';

import React, { createContext, useState, useContext, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import { User as SupabaseUser } from '@supabase/supabase-js';

interface User {
    id: string;
    email: string;
    role: string;
    username?: string;
    full_name?: string;
}

interface AuthContextType {
    user: User | null;
    supabaseUser: SupabaseUser | null;
    loading: boolean;
    signUp: (email: string, password: string, role: string, fullName?: string) => Promise<{ error: Error | null }>;
    signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
    signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [supabaseUser, setSupabaseUser] = useState<SupabaseUser | null>(null);
    const [loading, setLoading] = useState(true);
    const supabase = createClient();

    useEffect(() => {
        // Get initial session
        const initializeAuth = async () => {
            try {
                const { data: { session } } = await supabase.auth.getSession();

                if (session?.user) {
                    setSupabaseUser(session.user);
                    setUser({
                        id: session.user.id,
                        email: session.user.email || '',
                        role: session.user.user_metadata?.role || 'applicant',
                        username: session.user.email?.split('@')[0],
                        full_name: session.user.user_metadata?.full_name,
                    });
                }
            } catch (error) {
                console.error('Error initializing auth:', error);
            } finally {
                setLoading(false);
            }
        };

        initializeAuth();

        // Listen for auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            async (event, session) => {
                if (session?.user) {
                    setSupabaseUser(session.user);
                    setUser({
                        id: session.user.id,
                        email: session.user.email || '',
                        role: session.user.user_metadata?.role || 'applicant',
                        username: session.user.email?.split('@')[0],
                        full_name: session.user.user_metadata?.full_name,
                    });
                } else {
                    setSupabaseUser(null);
                    setUser(null);
                }
                setLoading(false);
            }
        );

        return () => {
            subscription.unsubscribe();
        };
    }, [supabase.auth]);

    const signUp = async (email: string, password: string, role: string, fullName?: string) => {
        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        role,
                        full_name: fullName,
                    },
                },
            });

            if (error) {
                return { error };
            }

            // Create initial profile for applicants
            if (role === 'applicant' && data.user) {
                const { error: profileError } = await supabase
                    .from('profiles')
                    .insert({
                        user_id: data.user.id,
                        personal_info: {
                            fullName: fullName || '',
                            title: '',
                            email: email,
                            phone: '',
                            location: '',
                            socials: {
                                linkedin: '',
                                github: '',
                                portfolio: '',
                            },
                            summary: '',
                        },
                        skills: [],
                        experience: [],
                        projects: [],
                        is_published: false,
                    });

                if (profileError) {
                    console.error('Error creating profile:', profileError);
                }
            }

            return { error: null };
        } catch (error) {
            return { error: error as Error };
        }
    };

    const signIn = async (email: string, password: string) => {
        try {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            return { error };
        } catch (error) {
            return { error: error as Error };
        }
    };

    const signOut = async () => {
        await supabase.auth.signOut();
        setUser(null);
        setSupabaseUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, supabaseUser, loading, signUp, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
