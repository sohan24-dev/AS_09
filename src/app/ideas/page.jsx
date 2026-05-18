import IdeaCard from "@/components/IdeaCard";
import { getIdeaData } from "@/lib/data";
import Image from "next/image";


const IdeasPage = async () => {
    const ideas = await getIdeaData()
    // console.log(ideas, "idea page");
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 m-10">
            {
                ideas.map((idea, idx) => <IdeaCard key={idx} idea={idea}></IdeaCard>)
            }
        </div>
    );
};

export default IdeasPage;