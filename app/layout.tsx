import type { Metadata } from "next";
import { AuthProvider } from "@/context/AuthContext";
import "@/styles/index.css";
import "@/styles/App.css";
import "@/styles/Auth.css";
import "@/styles/Editor.css";
import "@/styles/Home.css";
import "@/styles/InfiniteScroller.css";
import "@/styles/Profile.css";
import "@/styles/ProfileCard.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "One-Look Profile",
  description: "The modern way to showcase talent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
