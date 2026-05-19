'use client'

import { DollarSign, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MyideaDelete from "./MyideaDelete";
import MyideaEdit from "./MyideaEdit";


const Myidea = ({ idea, handleDelete }) => {
    const tagsArray = Array.isArray(idea?.Tags)
        ? idea.Tags
        : typeof idea?.Tags === "string"
            ? idea.Tags.split(",")
            : [];
    // console.log(idea.ideaTitle, "myideapage");
    return (
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-md overflow-hidden border border-gray-200 dark:border-zinc-800 hover:shadow-xl transition duration-300 flex flex-col h-full">

            <div className="relative w-full h-56">
                <Image
                    src={idea?.ImageURL || ''}
                    alt={idea?.IdeaTitle || ""}
                    fill
                    className="object-cover"
                />

                {/* Action Buttons */}
                <div className="absolute top-3 right-3 flex gap-2">

                    <MyideaEdit idea={idea}></MyideaEdit>

                    <MyideaDelete handleDelete={handleDelete} idea={idea}></MyideaDelete>

                </div>
            </div>

            <div className="p-5 flex flex-col flex-1 space-y-4">

                <span className="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 text-sm font-medium px-3 py-1 rounded-full w-fit">
                    {idea?.Category}
                </span>

                <h2 className="text-2xl font-bold text-gray-800 dark:text-white line-clamp-2">
                    {idea?.IdeaTitle}
                </h2>

                <p className="text-gray-600 dark:text-zinc-400 line-clamp-2">
                    {idea?.ShortDescription}
                </p>

                <div className="flex flex-wrap gap-2">
                    {tagsArray.map((tag, index) => (
                        <span
                            key={index}
                            className="bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300 text-xs px-3 py-1 rounded-full"
                        >
                            #{tag.trim()}
                        </span>
                    ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-zinc-400">

                    <div className="flex items-center gap-1">
                        <DollarSign size={16} />
                        <p>{idea?.EstimatedBudget}</p>
                    </div>

                    <div className="flex items-center gap-1">
                        <Target size={16} />
                        <p>{idea?.TargetAudience}</p>
                    </div>

                </div>

                <Link
                    href={`/ideas/${idea?._id}`}
                    className="mt-auto pt-4 block"
                >
                    <div className="w-full bg-black dark:bg-white text-white dark:text-black py-3 rounded-xl font-semibold hover:bg-gray-800 dark:hover:bg-zinc-200 transition text-center cursor-pointer">
                        View Details
                    </div>
                </Link>

            </div>
        </div>
    );
};

export default Myidea;