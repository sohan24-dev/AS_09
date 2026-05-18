"use client";

import {
    Cpu,
    Brain,
    HeartPulse,
    GraduationCap,
    DollarSign,
    MoreHorizontal,
} from "lucide-react";

const categories = [
    {
        title: "Technology",
        icon: Cpu,
        description: "Latest tech trends & tools",
        color: "from-blue-500/20 to-blue-600/10",
        iconColor: "text-blue-500",
    },
    {
        title: "AI & ML",
        icon: Brain,
        description: "Artificial Intelligence insights",
        color: "from-purple-500/20 to-purple-600/10",
        iconColor: "text-purple-500",
    },
    {
        title: "Health",
        icon: HeartPulse,
        description: "Wellness & medical updates",
        color: "from-red-500/20 to-red-600/10",
        iconColor: "text-red-500",
    },
    {
        title: "Education",
        icon: GraduationCap,
        description: "Learning & career growth",
        color: "from-green-500/20 to-green-600/10",
        iconColor: "text-green-500",
    },
    {
        title: "Finance",
        icon: DollarSign,
        description: "Money & investment tips",
        color: "from-yellow-500/20 to-yellow-600/10",
        iconColor: "text-yellow-500",
    },
    {
        title: "Others",
        icon: MoreHorizontal,
        description: "More interesting topics",
        color: "from-gray-500/20 to-gray-600/10",
        iconColor: "text-gray-500",
    },
];

import React from 'react';

const PopularCategories = () => {
    return (
        <section className="w-full py-12 px-4 sm:px-6 lg:px-10">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                        Popular Categories
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-2">
                        Explore trending topics across different fields
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories?.map((cat, index) => {
                        const Icon = cat.icon;

                        return (
                            <div
                                key={index}
                                className={`group cursor-pointer rounded-2xl p-6 border border-slate-200 dark:border-white/10
                bg-linear-to-br ${cat.color}
                hover:scale-[1.03] transition-all duration-300 shadow-sm hover:shadow-md`}
                            >
                                {/* Icon */}
                                <div
                                    className={`w-12 h-12 flex items-center justify-center rounded-xl bg-white/70 dark:bg-white/10 mb-4`}
                                >
                                    <Icon className={`${cat.iconColor} w-6 h-6`} />
                                </div>

                                {/* Text */}
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                                    {cat.title}
                                </h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                                    {cat.description}
                                </p>

                                {/* Hover effect line */}
                                <div className="mt-4 h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-white/40 dark:bg-white/20 rounded-full"></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default PopularCategories;