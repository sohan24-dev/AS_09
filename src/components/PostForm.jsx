"use client";


import { authClient } from "@/lib/auth-clients";
import toast from "react-hot-toast";

const PostForm = ({ postdata, token }) => {
    const {
        data: session,
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession()
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        // first create data
        const data = Object.fromEntries(formData.entries());

        // then use data
        const postInfo = {
            ...data,
            userName: session?.user?.name,
            userEmail: session?.user?.email,
        };

        // console.log(postInfo);

        if (postInfo) {

            postdata(postInfo, token);

            toast.success("Post successfully");

            e.target.reset();

            return;

        } else {
            toast.error("In Post some Error");
        }
    };

    const inputStyle =
        "w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-sm outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition";

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-gray-50 dark:bg-zinc-950">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-4xl bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-5 sm:p-8 md:p-10 space-y-6"
            >

                <div className="text-center space-y-1">
                    <h2 className="text-2xl sm:text-3xl font-bold">
                        Submit Your Idea
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Share your idea with the community
                    </p>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <input name="IdeaTitle" placeholder="Idea Title" className={inputStyle} />
                    <input name="ShortDescription" placeholder="Short Description" className={inputStyle} />

                    <select name="Category" className={inputStyle}>
                        <option value="">Select Category</option>
                        <option value="Tech">Tech</option>
                        <option value="Health">Health</option>
                        <option value="AI">AI</option>
                        <option value="Education">Education</option>
                        <option value="Education">Lifestyle</option>
                    </select>

                    <input name="Tags" placeholder="Tags (comma separated)" className={inputStyle} />

                    <input name="ImageURL" placeholder="Image URL" className={inputStyle} />
                    <input
                        name="EstimatedBudget"
                        type="number"
                        placeholder="Estimated Budget"
                        className={inputStyle}
                    />

                    <input
                        name="TargetAudience"
                        placeholder="Target Audience"
                        className={`${inputStyle} sm:col-span-2`}
                    />
                </div>


                <div className="space-y-4">
                    <textarea
                        name="DetailedDescription"
                        placeholder="Detailed Description"
                        className={`${inputStyle} h-18 sm:h-20 resize-none`}
                    />

                    <textarea
                        name="ProblemStatement"
                        placeholder="Problem Statement"
                        className={`${inputStyle} h-17 resize-none`}
                    />

                    <textarea
                        name="ProposedSolution"
                        placeholder="Proposed Solution"
                        className={`${inputStyle} h-18 resize-none`}
                    />
                </div>


                <button
                    type="submit"
                    className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-black text-white dark:bg-white dark:text-black rounded-xl font-semibold hover:scale-[1.02] active:scale-[0.98] transition cursor-pointer"
                >
                    Submit Idea
                </button>
            </form>
        </div>
    );
};

export default PostForm;