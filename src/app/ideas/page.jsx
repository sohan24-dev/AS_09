import IdeaCard from "@/components/IdeaCard";
import { getIdeaData } from "@/lib/data";

export const metadata = {
    title: "IdeaVault | ideas",
    description: "This is ideas for you",
};
const IdeasPage = async () => {
    const ideas = await getIdeaData()
    // console.log(ideas, "idea page");
    return (
        <div className=" grid lg:grid-cols-3 sm:grid-cols-2 gap-3  m-10 ">
            {
                ideas?.map((idea, idx) => <IdeaCard key={idx} idea={idea}></IdeaCard>)
            }
        </div>
    );
};

export default IdeasPage;