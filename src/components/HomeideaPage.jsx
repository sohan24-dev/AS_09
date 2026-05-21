import { homepagedata } from "@/lib/data";
import IdeaCard from "./IdeaCard";
import Link from "next/link";
import { TrendingUp } from "lucide-react";


const HomeideaPage = async () => {
    const ideas = await homepagedata()
    // console.log(ideas);
    return (
        <div className="max-w-7xl mx-auto px-2">
            <div className="mx-auto px-4 mt-8">

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

                    {/* Title */}
                    <h2 className="flex items-start sm:items-center gap-3 text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white leading-snug">

                        <span className="p-2 rounded-xl bg-blue-100 dark:bg-blue-900/30 shrink-0">
                            <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
                        </span>

                        <span>
                            Trending Ideas You Shouldn’t Miss
                        </span>
                    </h2>

                    {/* Badge */}
                    <span className="self-start sm:self-auto text-xs font-medium px-3 py-1 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300">
                        Hot 🔥
                    </span>
                </div>

                {/* Subtitle */}
                <p className="mt-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-2xl">
                    Discover the most popular and fast-growing ideas right now across the platform.
                </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
                {
                    ideas?.map((idea, idx) => (
                        <IdeaCard key={idx} idea={idea} />
                    ))
                }
            </div>
            <div className="flex justify-center mt-6">
                <Link
                    href="/ideas"
                    className="inline-flex items-center justify-center px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-xl font-semibold hover:bg-gray-800 dark:hover:bg-zinc-200 transition cursor-pointer"
                >
                    Explore More
                </Link>
            </div>
        </div>
    );
};

export default HomeideaPage;