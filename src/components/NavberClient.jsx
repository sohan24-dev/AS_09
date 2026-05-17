"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import ProfileDropdown from "./ProfileDropdown";
import { ThemeSwitch } from "./ThemeToggle";

export default function NavbarClient({ navLinks }) {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (href) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    return (
        <div className="flex items-center gap-3">


            <div className="hidden lg:flex items-center gap-2">
                {navLinks.map((item) => {
                    const active = isActive(item.href);

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`rounded-full px-4 py-2 text-sm font-semibold transition
                                ${active
                                    ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                                    : "text-slate-700 hover:bg-slate-200/70 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white"
                                }
                            `}
                        >
                            {item.label}
                        </Link>
                    );
                })}
            </div>


            <div className="flex lg:hidden items-center gap-2">
                <button
                    onClick={() => setOpen(!open)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/20 bg-white/10 dark:bg-white/5 text-slate-900 dark:text-white"
                >
                    {open ? <X size={18} /> : <Menu size={18} />}
                </button>

                <ProfileDropdown />
                <ThemeSwitch />
            </div>


            <div
                className={`absolute left-0 top-20 w-full border-b border-slate-200/10 bg-white/95 text-slate-900 dark:bg-[#081028]/95 dark:text-white backdrop-blur-xl lg:hidden transition-all duration-300
                ${open
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-4 pointer-events-none"
                    }`}
            >
                <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5">

                    {navLinks.map((item) => {
                        const active = isActive(item.href);

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className={`rounded-xl px-4 py-3 text-sm font-semibold transition
                                    ${active
                                        ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                                        : "text-slate-700 hover:bg-slate-200/70 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white"
                                    }
                                `}
                            >
                                {item.label}
                            </Link>
                        );
                    })}

                </div>
            </div>
        </div>
    );
}