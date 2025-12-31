"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Layers, Layout, Share2, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function NewLandingPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[100px] animate-float" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[100px] animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 relative">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center rounded-full border px-3 py-1 text-sm bg-secondary/50 backdrop-blur-sm text-secondary-foreground"
              >
                <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
                v1.0 is now live
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl"
              >
                Your Professional Identity, <br className="hidden sm:block" />
                <span className="text-gradient">Redefined Visually.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mx-auto max-w-[700px] text-muted-foreground md:text-xl leading-relaxed"
              >
                Forget polished resumes. OpenPages helps you build a modular, visual public page that truly represents who you are and what you create.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 w-full justify-center pt-4"
              >
                <Link href="/register">
                  <Button size="lg" className="h-14 px-8 rounded-full text-lg w-full sm:w-auto shadow-xl shadow-primary/20 hover:transform hover:scale-105 transition-all">
                    Start Building Free <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/login">
                  <Button variant="outline" size="lg" className="h-14 px-8 rounded-full text-lg w-full sm:w-auto hover:bg-secondary/50 backdrop-blur-sm">
                    View Live Demo
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Abstract Hero Image / UI Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: 10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.5, type: "spring" }}
            className="mt-20 mx-auto max-w-5xl px-4 relative perspective-1000"
          >
            <div className="rounded-2xl border bg-background/50 backdrop-blur-xl shadow-2xl overflow-hidden aspect-[16/9] relative group">
              {/* Mockup Content */}
              <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20 p-8 flex flex-col items-center justify-center">
                <div className="w-full max-w-2xl space-y-6">
                  {/* Mock User Header */}
                  <div className="flex items-center gap-4 p-6 rounded-xl bg-white/50 dark:bg-black/20 border shadow-sm backdrop-blur-md">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500" />
                    <div className="space-y-2 flex-1">
                      <div className="h-4 w-1/3 rounded bg-current opacity-20" />
                      <div className="h-3 w-1/2 rounded bg-current opacity-10" />
                    </div>
                  </div>
                  {/* Mock Blocks Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-32 rounded-xl bg-blue-500/10 border border-blue-500/20" />
                    <div className="h-32 rounded-xl bg-purple-500/10 border border-purple-500/20" />
                    <div className="h-32 col-span-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20" />
                  </div>
                </div>
              </div>
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </div>

            {/* Floating Elements */}
            <div className="absolute -right-10 -bottom-10 h-32 w-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl rotate-12 blur-2xl opacity-40 animate-pulse" />
            <div className="absolute -left-10 -top-10 h-32 w-32 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl -rotate-12 blur-2xl opacity-40 animate-pulse" style={{ animationDelay: "1s" }} />
          </motion.div>
        </section>

        {/* Features Grid */}
        <section className="w-full py-24 bg-secondary/30 relative">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gradient">Everything you need.</h2>
              <p className="text-muted-foreground max-w-[600px] mx-auto">
                Powerful blocks and minimal design to let your work shine.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={<Layout className="h-8 w-8 text-blue-500" />}
                title="Modular Blocks"
                description="Drag, drop, and resize content blocks to create a unique layout that fits your content perfectly."
              />
              <FeatureCard
                icon={<Sparkles className="h-8 w-8 text-purple-500" />}
                title="AI Assistance"
                description="Stuck on what to write? Let our AI generate professional bios and project descriptions for you."
              />
              <FeatureCard
                icon={<Share2 className="h-8 w-8 text-emerald-500" />}
                title="Smart Sharing"
                description="Rich previews when you share your link on Twitter, LinkedIn, or iMessage."
              />
              <FeatureCard
                icon={<Layers className="h-8 w-8 text-orange-500" />}
                title="Tech Integration"
                description="Embed your Github repos, Dribbble shots, and more directly into your page."
              />
              <FeatureCard
                icon={<CheckCircle2 className="h-8 w-8 text-pink-500" />}
                title="SEO Optimized"
                description="Your page is automatically optimized for search engines to help you get discovered."
              />
              <FeatureCard
                icon={<Layout className="h-8 w-8 text-indigo-500" />}
                title="Dark Mode"
                description="Automatic dark mode support that looks stunning in low-light environments."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 -z-10" />
          <div className="container px-4 md:px-6 mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Ready to claim your corner of the internet?</h2>
            <div className="flex justify-center">
              <Link href="/register">
                <Button size="lg" className="h-16 px-10 text-lg rounded-full shadow-2xl shadow-primary/30">
                  Create Your Page Now
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">No credit card required. Free for early adopters.</p>
          </div>
        </section>
      </main>

      <footer className="py-12 w-full border-t bg-background z-10">
        <div className="container px-4 md:px-6 mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl">OpenPages.</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2024 OpenPages. All rights reserved.</p>
          <nav className="flex gap-6">
            <Link className="text-sm text-muted-foreground hover:text-foreground transition-colors" href="#">Twitter</Link>
            <Link className="text-sm text-muted-foreground hover:text-foreground transition-colors" href="#">Github</Link>
            <Link className="text-sm text-muted-foreground hover:text-foreground transition-colors" href="#">Privacy</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-8 rounded-2xl bg-card border hover:border-primary/20 shadow-sm hover:shadow-xl transition-all duration-300 group"
    >
      <div className="mb-6 p-3 rounded-2xl bg-secondary w-fit group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  )
}
