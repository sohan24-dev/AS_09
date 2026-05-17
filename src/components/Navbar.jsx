import Link from "next/link";
import { Lightbulb } from "lucide-react";
import ProfileDropdown from "./ProfileDropdown";
import { ThemeSwitch } from "./ThemeToggle";
import NavbarClient from "./NavberClient";

export default function Navbar() {
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

                {/* LOGO */}
                <Link href="/" className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 via-blue-500 to-cyan-400">
                        <Lightbulb className="h-5 w-5 text-white" />
                    </div>

                    <h1 className="text-xl font-bold text-slate-900 dark:text-white">
                        IdeaVault
                    </h1>
                </Link>

                {/* NAV CLIENT */}
                <NavbarClient navLinks={navigationItems} />

                {/* DESKTOP RIGHT SIDE */}
                <div className="hidden md:flex items-center gap-2">
                    <ThemeSwitch />
                    <ProfileDropdown />
                </div>

            </nav>
        </header>
    );
}