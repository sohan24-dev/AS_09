import Link from "next/link";
import { Lightbulb } from "lucide-react";
import NavbarClient from "./NavberClient";
import ProfileDropdown from "./ProfileDropdown";

const Navbar = () => {
    const navigationItems = [
        { label: "Home", href: "/" },
        { label: "Ideas", href: "/ideas" },
        { label: "Add Idea", href: "/add-idea" },
        { label: "My Ideas", href: "/my-ideas" },
        { label: "Interactions", href: "/my-interactions" },
    ];

    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#081028]/80 backdrop-blur-xl">
            <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">


                <Link href="/" className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 via-blue-500 to-cyan-400">
                        <Lightbulb className="h-5 w-5 text-white" />
                    </div>

                    <h1 className="text-xl font-bold text-white">
                        IdeaVault
                    </h1>
                </Link>

                <NavbarClient navLinks={navigationItems} />
                <div className=" hidden md:flex items-center">
                    <ProfileDropdown />
                </div>

            </nav>
        </header>
    );
};

export default Navbar;