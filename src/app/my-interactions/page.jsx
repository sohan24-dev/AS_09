import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { getComment } from "@/lib/data";
import InterActions from "@/components/InterActions";
import { handleDeleteComment, updateComment } from "@/lib/action";


export const metadata = {
    title: "IdeaVault | interactions",
    description: "This page is for user interactions",
};

const MyCommentsPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    // console.log(updateComment);
    const comment = await getComment();

    const userEmail = session?.user?.email;

    const myComments = comment.filter(
        (c) => c.email === userEmail
    );

    // console.log("session:", session);
    // console.log("myComments:", myComments);

    return (
        <div className="container mx-auto">
            {myComments && <h2 className="text-2xl font-medium mt-3">Total comment : {myComments.length}</h2>}
            {myComments.length === 0 ? (
                <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                        No Commnet Found
                    </h2>

                    <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-md">
                        You haven't added any ideas yet. Start sharing your creative ideas and projects.
                    </p>
                </div>
            ) : (
                myComments.map((c, idx) => (
                    <InterActions handleDeleteComment={handleDeleteComment} updateComment={updateComment} key={idx} comment={c}></InterActions>
                ))
            )}
        </div>
    );
};

export default MyCommentsPage;