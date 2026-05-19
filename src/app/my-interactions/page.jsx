import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { getComment } from "@/lib/data";
import InterActions from "@/components/InterActions";
import { handleDeleteComment } from "@/lib/action";


export const metadata = {
    title: "IdeaVault | interactions",
    description: "This page is for user interactions",
};

const MyCommentsPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const comment = await getComment();

    const userEmail = session?.user?.email;

    const myComments = comment.filter(
        (c) => c.email === userEmail
    );

    // console.log("session:", session);
    // console.log("myComments:", myComments);

    return (
        <div className="container mx-auto">
            {myComments.length === 0 ? (
                <p>No comments found</p>
            ) : (
                myComments.map((c, idx) => (
                    <InterActions handleDeleteComment={handleDeleteComment} key={idx} comment={c}></InterActions>
                ))
            )}
        </div>
    );
};

export default MyCommentsPage;