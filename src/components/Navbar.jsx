// 'use client'

import Link from "next/link";
import { Lightbulb } from "lucide-react";
import ProfileDropdown from "./ProfileDropdown";
import { ThemeSwitch } from "./ThemeToggle";
import NavbarClient from "./NavberClient";
import { authClient } from "@/lib/auth-clients";

export default async function Navbar() {
    const { data: session, error } = await authClient.getSession()

    console.log(session, 'session');
    const navigationItems = [
        { label: "Home", href: "/" },
        { label: "Ideas", href: "/ideas" },
        { label: "Add Idea", href: "/add-idea" },
        { label: "My Ideas", href: "/my-ideas" },
        { label: "Interactions", href: "/my-interactions" },
    ];

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200/10 bg-white/70 dark:bg-[#081028]/80 backdrop-blur-xl transition-colors duration-300">
            <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">


                <Link href="/" className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-linear-to-br from-violet-600 via-blue-500 to-cyan-400">
                        <Lightbulb className="h-5 w-5 text-white" />
                    </div>

                    <h1 className="text-xl font-bold text-slate-900 dark:text-white">
                        IdeaVault
                    </h1>
                </Link>


                <NavbarClient navLinks={navigationItems} />


                <div className="hidden lg:flex items-center gap-2">
                    <Link
                        href="/login"
                        className="
          px-4 py-2 text-sm font-medium rounded-lg
          border border-gray-300 dark:border-white/10
          text-gray-700 dark:text-white
          hover:bg-gray-100 dark:hover:bg-white/10
          transition
        "
                    >
                        Login
                    </Link>


                    <Link
                        href="/register"
                        className="
          px-4 py-2 text-sm font-medium rounded-lg
          bg-gray-900 dark:bg-white
          text-white dark:text-black
          hover:opacity-90 transition
        "
                    >
                        Register
                    </Link>
                    <ProfileDropdown />
                    <ThemeSwitch />
                </div>

            </nav>
        </header>
    );
}