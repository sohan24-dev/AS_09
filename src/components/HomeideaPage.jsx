import { getIdeaData } from "@/lib/data";
import IdeaCard from "./IdeaCard";


const HomeideaPage = async () => {
    const ideas = await getIdeaData()
    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-medium mt-5 ml-5">Trending ideas</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
                {
                    ideas.slice(0, 6).map((idea, idx) => (
                        <IdeaCard key={idx} idea={idea} />
                    ))
                }
            </div>
        </div>
    );
};

export default HomeideaPage;