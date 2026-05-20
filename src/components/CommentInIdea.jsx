'use client'

import { authClient } from "@/lib/auth-clients";
import toast from "react-hot-toast";

const CommentInIdea = ({ commentData, idea, token }) => {
    // console.log(token, "comment token data");
    const {
        data: session,
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession();

    const handleSubmit = (e) => {
        e.preventDefault();
        const userName = session?.user?.name;
        const email = session?.user?.email;
        // console.log(email);
        const commentText = e.target.comment.value;
        // console.log(commentText);
        if (commentText) {
            commentData({
                text: commentText,
                ideaId: idea._id,
                userName: userName,
                email: email
            }, token);
            toast.success("comment successfully");
            e.target.reset();

        }
    };
    return (
        <div className="mt-10 space-y-6">

            <h2 className="text-2xl font-bold">Comments</h2>


            <form
                onSubmit={handleSubmit}
                className="space-y-3 p-5 rounded-2xl border bg-white dark:bg-zinc-900"
            >

                <textarea
                    placeholder="Write your comment..."
                    name="comment"
                    className="w-full px-3 py-2 border rounded-lg outline-none dark:bg-zinc-800"
                    rows={2}
                />

                <button
                    type="submit"

                    className="px-5 cursor-pointer py-2 bg-black text-white dark:bg-white dark:text-black rounded-lg font-semibold hover:opacity-80 transition"
                >
                    Post Comment
                </button>
            </form>


            <div>need here comment show</div>
        </div>
    );
};

export default CommentInIdea;