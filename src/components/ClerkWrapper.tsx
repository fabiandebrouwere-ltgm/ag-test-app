"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { ReactNode, useEffect, useState } from "react";

interface ClerkWrapperProps {
    children: ReactNode;
    publishableKey: string | undefined;
}

function ClerkErrorDisplay() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 text-white p-6">
            <div className="max-w-md text-center">
                <div className="mb-6 text-6xl">🔐</div>
                <h1 className="text-2xl font-bold mb-4">Service d'authentification indisponible</h1>
                <p className="text-gray-400 mb-6">
                    Notre service d'authentification (Clerk) rencontre des difficultés.
                    Veuillez réessayer dans quelques minutes.
                </p>
                <div className="space-y-3">
                    <a
                        href="https://status.clerk.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    >
                        Vérifier le statut Clerk →
                    </a>
                    <button
                        onClick={() => window.location.reload()}
                        className="block w-full px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition-opacity"
                    >
                        Réessayer
                    </button>
                </div>
            </div>
        </div>
    );
}

function MissingKeyDisplay() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 text-white p-6">
            <div className="max-w-md text-center">
                <div className="mb-6 text-6xl">⚙️</div>
                <h1 className="text-2xl font-bold mb-4">Configuration requise</h1>
                <p className="text-gray-400 mb-6">
                    Les clés d'authentification Clerk ne sont pas configurées.
                    Vérifiez les variables d'environnement sur Vercel.
                </p>
                <div className="bg-gray-800/50 rounded-lg p-4 text-left text-sm font-mono text-gray-300">
                    <p>NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY</p>
                    <p>CLERK_SECRET_KEY</p>
                </div>
            </div>
        </div>
    );
}

export default function ClerkWrapper({ children, publishableKey }: ClerkWrapperProps) {
    const [clerkStatus, setClerkStatus] = useState<"loading" | "ok" | "error" | "missing-key">("loading");

    useEffect(() => {
        if (!publishableKey) {
            setClerkStatus("missing-key");
            return;
        }

        // Simple health check - try to load Clerk's frontend API
        const checkClerk = async () => {
            try {
                const response = await fetch("https://api.clerk.com/v1/health", {
                    method: "GET",
                    signal: AbortSignal.timeout(5000),
                });

                if (response.ok) {
                    setClerkStatus("ok");
                } else {
                    setClerkStatus("error");
                }
            } catch {
                // If health check fails, still try to render - Clerk might work
                setClerkStatus("ok");
            }
        };

        checkClerk();
    }, [publishableKey]);

    if (clerkStatus === "loading") {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
                <div className="animate-spin w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full" />
            </div>
        );
    }

    if (clerkStatus === "missing-key") {
        return <MissingKeyDisplay />;
    }

    if (clerkStatus === "error") {
        return <ClerkErrorDisplay />;
    }

    return (
        <ClerkProvider publishableKey={publishableKey}>
            {children}
        </ClerkProvider>
    );
}
