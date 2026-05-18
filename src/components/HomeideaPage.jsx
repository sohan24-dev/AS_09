import { homepagedata } from "@/lib/data";
import IdeaCard from "./IdeaCard";
import Link from "next/link";


const HomeideaPage = async () => {
    const ideas = await homepagedata()
    console.log(ideas);
    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-medium mt-5 ml-5">Trending ideas</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
                {
                    ideas.map((idea, idx) => (
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