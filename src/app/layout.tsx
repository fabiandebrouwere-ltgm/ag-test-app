import type { Metadata } from "next";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hello World App - A Maintainable Web Application",
  description: "A production-ready, fully tested, and easily maintainable web application. Built with Next.js, featuring unit tests, E2E tests, and CI/CD pipeline.",
  keywords: ["hello world", "next.js", "react", "web application", "maintainable"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Hello World App",
    description: "A production-ready, fully tested web application",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <header className="fixed top-0 right-0 z-50 p-6 flex gap-4 items-center">
            <SignedOut>
              <SignInButton>
                <button className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium text-sm hover:opacity-90 transition-opacity">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="px-4 py-2 rounded-full border border-white/20 text-white font-medium text-sm hover:bg-white/10 transition-colors">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10 ring-2 ring-purple-500/50 hover:ring-purple-500",
                  }
                }}
              />
            </SignedIn>
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
