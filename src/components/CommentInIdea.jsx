'use client'

import toast from "react-hot-toast";

const CommentInIdea = ({ commentData, idea }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const commentText = e.target.comment.value;
        console.log(commentText);
        if (commentText) {
            commentData({
                text: commentText,
                ideaId: idea._id
            });
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
                    rows={4}
                />

                <button
                    type="submit"

                    className="px-5 cursor-pointer py-2 bg-black text-white dark:bg-white dark:text-black rounded-lg font-semibold hover:opacity-80 transition"
                >
                    Post Comment
                </button>
            </form>


            {/* <div className="space-y-3">
                {comments.length === 0 ? (
                    <p className="text-gray-500">No comments yet.</p>
                ) : (
                    comments.map((c, i) => (
                        <div
                            key={i}
                            className="p-4 rounded-xl border bg-gray-50 dark:bg-zinc-800"
                        >
                            <div className="flex justify-between">
                                <h4 className="font-semibold">{c.name}</h4>
                                <span className="text-xs text-gray-500">
                                    {c.createdAt}
                                </span>
                            </div>
                            <p className="mt-2 text-gray-700 dark:text-gray-300">
                                {c.text}
                            </p>
                        </div>
                    ))
                )}
            </div> */}
        </div>
    );
};

export default CommentInIdea;