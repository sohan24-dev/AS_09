"use client";

import Link from "next/link";
import { Lightbulb, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-colors duration-300">

            <div className="max-w-7xl mx-auto px-6 py-14">

                {/* TOP SECTION */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* BRAND */}
                    <div>
                        <div className="flex items-center gap-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-linear-to-br from-violet-600 via-blue-500 to-cyan-400">
                                <Lightbulb className="h-5 w-5 text-white" />
                            </div>

                            <h1 className="text-xl font-bold text-slate-900 dark:text-white">
                                IdeaVault
                            </h1>
                        </div>

                        <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                            Share, explore, and discover innovative ideas from developers and creators worldwide.
                        </p>
                    </div>

                    {/* NAVIGATION */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-900 dark:text-zinc-200">
                            Navigation
                        </h3>

                        <ul className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
                            <li><Link href="/" className="hover:text-black dark:hover:text-white">Home</Link></li>
                            <li><Link href="/ideas" className="hover:text-black dark:hover:text-white">Ideas</Link></li>
                            <li><Link href="/add-idea" className="hover:text-black dark:hover:text-white">Add Idea</Link></li>
                            <li><Link href="/about" className="hover:text-black dark:hover:text-white">About</Link></li>
                        </ul>
                    </div>

                    {/* RESOURCES */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-900 dark:text-zinc-200">
                            Resources
                        </h3>

                        <ul className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
                            <li><Link href="/privacy" className="hover:text-black dark:hover:text-white">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-black dark:hover:text-white">Terms</Link></li>
                            <li><Link href="/support" className="hover:text-black dark:hover:text-white">Support</Link></li>
                            <li><Link href="/faq" className="hover:text-black dark:hover:text-white">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* SOCIAL */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-900 dark:text-zinc-200">
                            Connect
                        </h3>

                        <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                            Follow us for updates and inspiration.
                        </p>

                        <div className="flex gap-3 mt-5">

                            {/* GitHub */}
                            <Link
                                href="https://github.com"
                                target="_blank"
                                className="w-10 h-10 flex items-center justify-center border border-zinc-300 dark:border-zinc-700 rounded-xl
                                hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition"
                            >
                                <FaGithub size={18} />
                            </Link>

                            {/* LinkedIn */}
                            <Link
                                href="https://linkedin.com"
                                target="_blank"
                                className="w-10 h-10 flex items-center justify-center border border-zinc-300 dark:border-zinc-700 rounded-xl
                                hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition"
                            >
                                <FaLinkedinIn size={18} />
                            </Link>

                            {/* Email */}
                            <Link
                                href="mailto:example@gmail.com"
                                className="w-10 h-10 flex items-center justify-center border border-zinc-300 dark:border-zinc-700 rounded-xl
                                hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition"
                            >
                                <Mail size={18} />
                            </Link>

                            {/* X */}
                            <Link
                                href="#"
                                className="w-10 h-10 flex items-center justify-center border border-zinc-300 dark:border-zinc-700 rounded-xl
                                hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition"
                            >
                                <FaXTwitter size={18} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* BOTTOM SECTION */}
                <div className="mt-12 pt-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">

                    <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center sm:text-left">
                        © 2026 IdeaHub. All rights reserved.
                    </p>

                    <div className="flex flex-wrap justify-center sm:justify-end gap-5 text-sm text-zinc-500 dark:text-zinc-400">
                        <h3 href="/privacy" className="hover:text-black dark:hover:text-white cursor-pointer">Privacy</h3>
                        <h3 href="/terms" className="hover:text-black dark:hover:text-white cursor-pointer">Terms</h3>
                        <h3 href="/contact" className="hover:text-black dark:hover:text-white cursor-pointer">Contact</h3>
                    </div>

                </div>

            </div>
        </footer>
    );
}