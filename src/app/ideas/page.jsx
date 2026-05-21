import IdeaCard from "@/components/IdeaCard";
import IdeaSearch from "@/components/IdeaSearch";
import { filterIdea, getIdeaData } from "@/lib/data";

export const metadata = {
    title: "IdeaVault | ideas",
    description: "This is ideas for you",
};
const IdeasPage = async ({ searchParams }) => {
    const sparams = await searchParams;
    const search = sparams?.search || "";
    const category = sparams?.category || "";
    // console.log(category, "sparams");


    // const ideas = await getIdeaData();
    const ideas = (search || category)
        ? await filterIdea(search, category)
        : await getIdeaData();


    // console.log(ideas, "idea page");
    // console.log(courses);
    return (
        <div className="max-w-7xl mx-auto">
            <div className="mt-6 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Discover Ideas That Inspire You
                </h2>

                <p className="mt-2 text-sm sm:text-base text-gray-500 dark:text-gray-400">
                    Explore, filter, and find creative ideas shared by the community
                </p>


            </div>
            <div className=" my-8 mx-4"><IdeaSearch></IdeaSearch></div>
            <div className=" grid lg:grid-cols-3 sm:grid-cols-2 gap-3  my-8 mx-4">
                {
                    ideas?.map((idea, idx) => <IdeaCard key={idx} idea={idea}></IdeaCard>)
                }
            </div>
        </div>
    );
};

export default IdeasPage;