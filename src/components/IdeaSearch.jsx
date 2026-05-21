"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const IdeaSearch = () => {
    const router = useRouter();

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");


    const updateURL = (
        newSearch = search,
        newCategory = category
    ) => {
        const query = new URLSearchParams();

        if (newSearch.trim()) {
            query.set("search", newSearch);
        }

        if (newCategory.trim()) {
            query.set("category", newCategory);
        }

        router.push(`/ideas?${query.toString()}`);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        updateURL();
    };


    const handleCategoryChange = (e) => {
        const value = e.target.value;

        setCategory(value);

        updateURL(search, value);
    };

    return (
        <div
            className="flex flex-col md:flex-row gap-3 mb-6 
    p-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
        >

            <form onSubmit={handleSearch} className="flex flex-1 gap-2">
                <input
                    type="text"
                    placeholder="Search ideas..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="flex-1 px-4 py-2 rounded-lg border 
            border-gray-300 dark:border-gray-600 
            bg-white dark:bg-gray-800
            text-gray-900 dark:text-white
            placeholder-gray-400 dark:placeholder-gray-500
            focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <button
                    type="submit"
                    className="px-5 py-2 rounded-lg bg-blue-600 
            text-white hover:bg-blue-700 transition"
                >
                    Search
                </button>
            </form>

            <select
                value={category}
                onChange={handleCategoryChange}
                className="px-4 py-2 rounded-lg border 
        border-gray-300 dark:border-gray-600
        bg-white dark:bg-gray-800
        text-gray-900 dark:text-white
        focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
                <option value="">All Categories</option>
                <option value="ai">AI</option>
                <option value="lifestyle">Lifestyle</option>
                <option value="tech">Tech</option>
                <option value="health">Health</option>
                <option value="education">Education</option>
            </select>
        </div>
    );
};

export default IdeaSearch;