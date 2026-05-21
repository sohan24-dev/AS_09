
import Myidea from "@/components/Myidea";
import { handleDelete, updateIdea } from "@/lib/action";
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
        <div className="max-w-7xl mx-auto">

            {myIdeas.length > 0 && (
                <h2 className="text-2xl font-medium mt-3">
                    Your Total ideas: {myIdeas.length}
                </h2>
            )}

            {myIdeas.length === 0 ? (
                <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                        No Ideas Found
                    </h2>

                    <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-md">
                        You haven't added any ideas yet. Start sharing your creative ideas and projects.
                    </p>
                </div>
            ) : (
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-3 mt-6 px-2">
                    {myIdeas.map((idea) => (
                        <Myidea
                            key={idea._id}
                            idea={idea}
                            handleDelete={handleDelete}
                            updateIdea={updateIdea}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyIdeaPage;