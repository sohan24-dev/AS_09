"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import ProfileDropdown from "./ProfileDropdown";

const NavbarClient = ({ navLinks }) => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    return (
        <div className="flex items-center gap-3">


            <div className="hidden md:flex items-center gap-2">
                {navLinks.map((item) => {
                    const active = pathname.startsWith(item.href);

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`rounded-full px-4 py-2 text-sm font-semibold transition
                ${active
                                    ? "bg-white/10 text-white"
                                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                                }
              `}
                        >
                            {item.label}
                        </Link>
                    );
                })}
            </div>


            <div className="flex md:hidden items-center gap-2">


                <button
                    onClick={() => setOpen(!open)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white"
                >
                    {open ? <X size={18} /> : <Menu size={18} />}
                </button>


                <ProfileDropdown />
            </div>


            <div
                className={`absolute left-0 top-20 w-full border-b border-white/10 bg-[#081028]/95 backdrop-blur-xl md:hidden transition-all duration-300
          ${open
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-4 pointer-events-none"
                    }
        `}
            >
                <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5">

                    {navLinks.map((item) => {
                        const active = pathname.startsWith(item.href);

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className={`rounded-xl px-4 py-3 text-sm font-semibold transition
                  ${active
                                        ? "bg-white/10 text-white"
                                        : "text-slate-300 hover:bg-white/5 hover:text-white"
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
};

export default NavbarClient;