
import Myidea from "@/components/Myidea";
import { handleDelete } from "@/lib/action";
import { auth } from "@/lib/auth";
import { getIdeaData } from "@/lib/data";
import { headers } from "next/headers";


export const metadata = {
    title: "IdeaVault | my-ideas",
    description: "This page is for user ideas",
};

const MyIdeaPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const ideaData = await getIdeaData();

    const userEmail = session?.user?.email;


    const myIdeas = ideaData.filter(
        (idea) => idea.userEmail === userEmail
    );

    // console.log("session:", userEmail);
    // console.log("myIdeas:", myIdeas);
    return (
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 sm:grid-cols-2 gap-3 mt-6 px-2">
            {
                myIdeas.map((idea, idx) => <Myidea key={idx} idea={idea} handleDelete={handleDelete}></Myidea>)
            }
        </div>
    );
};

export default MyIdeaPage;