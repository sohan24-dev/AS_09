import CommentInIdea from "@/components/CommentInIdea";
import { commentData } from "@/lib/action";
import { getSingleIdea } from "@/lib/data";
import { AlertTriangle, DollarSign, Lightbulb, Tag, Target } from "lucide-react";
import Image from "next/image";


const IdDetailsPage = async ({ params }) => {
    const { id } = await params
    // console.log(id, 'params');
    const idea = await getSingleIdea(id);
    // console.log(idea);
    return (

        <div className="max-w-6xl mx-auto px-4 py-10">


            <div className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-lg">
                <Image
                    src={idea.ImageURL || "/placeholder.jpg"}
                    alt={idea.IdeaTitle}
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                <div className="absolute bottom-6 left-6 text-white">
                    <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm">
                        {idea.Category}
                    </span>
                    <h1 className="text-3xl md:text-4xl font-bold mt-2">
                        {idea.IdeaTitle}
                    </h1>
                </div>
            </div>


            <div className="grid md:grid-cols-3 gap-8 mt-10">


                <div className="md:col-span-2 space-y-8">


                    <div>
                        <h2 className="text-xl font-semibold flex items-center gap-2">
                            <Lightbulb size={18} /> Overview
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                            {idea.ShortDescription}
                        </p>
                    </div>


                    <div>
                        <h2 className="text-xl font-semibold flex items-center gap-2">
                            <Tag size={18} /> Tags
                        </h2>

                        <div className="flex flex-wrap gap-2 mt-3">
                            {idea.Tags?.map((tag, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>


                    <div className="p-5 rounded-2xl border border-red-100 dark:border-red-900 bg-red-50 dark:bg-red-950/20">
                        <h2 className="text-xl font-semibold flex items-center gap-2 text-red-600">
                            <AlertTriangle size={18} /> Problem
                        </h2>
                        <p className="mt-2 text-gray-700 dark:text-gray-300">
                            {idea.ProblemStatement}
                        </p>
                    </div>


                    <div className="p-5 rounded-2xl border border-green-100 dark:border-green-900 bg-green-50 dark:bg-green-950/20">
                        <h2 className="text-xl font-semibold flex items-center gap-2 text-green-600">
                            💡 Solution
                        </h2>
                        <p className="mt-2 text-gray-700 dark:text-gray-300">
                            {idea.ProposedSolution || "No solution provided yet."}
                        </p>
                    </div>
                </div>


                <div className="space-y-4">


                    <div className="p-5 rounded-2xl shadow-sm border bg-white dark:bg-zinc-900">
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                            <DollarSign size={18} />
                            <span className="font-semibold">Budget</span>
                        </div>
                        <p className="text-2xl font-bold mt-2">
                            ${idea.EstimatedBudget}
                        </p>
                    </div>


                    <div className="p-5 rounded-2xl shadow-sm border bg-white dark:bg-zinc-900">
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                            <Target size={18} />
                            <span className="font-semibold">Target Audience</span>
                        </div>
                        <p className="mt-2 text-gray-700 dark:text-gray-300">
                            {idea.TargetAudience}
                        </p>
                    </div>


                    <div className="p-5 rounded-2xl shadow-sm border bg-white dark:bg-zinc-900">
                        <span className="text-sm text-gray-500">Category</span>
                        <p className="text-lg font-semibold">
                            {idea.Category}
                        </p>
                    </div>
                </div>
            </div>
            <CommentInIdea idea={idea} commentData={commentData}></CommentInIdea>
        </div>
    );
};

export default IdDetailsPage;