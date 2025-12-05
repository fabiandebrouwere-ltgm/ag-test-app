import type { Metadata } from "next";
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
