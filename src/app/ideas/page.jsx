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
    console.log(category, "sparams");


    // const ideas = await getIdeaData();
    const ideas = (search || category)
        ? await filterIdea(search, category)
        : await getIdeaData();


    // console.log(ideas, "idea page");
    // console.log(courses);
    return (
        <div className=" m-10 ">
            <div><IdeaSearch></IdeaSearch></div>
            <div className=" grid lg:grid-cols-3 sm:grid-cols-2 gap-3 ">
                {
                    ideas?.map((idea, idx) => <IdeaCard key={idx} idea={idea}></IdeaCard>)
                }
            </div>
        </div>
    );
};

export default IdeasPage;