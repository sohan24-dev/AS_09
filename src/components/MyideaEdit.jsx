"use client";

import { authClient } from "@/lib/auth-clients";
import {
    Button,
    Modal,
    Surface,
    useOverlayState,
} from "@heroui/react";
import {
    Pencil,
} from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const MyideaEdit = ({ idea, updateIdea }) => {
    // console.log(idea);

    const state = useOverlayState();
    const router = useRouter()
    const handleEditIdea = async (e) => {
        e.preventDefault();
        const tokenData = await authClient.token();
        // console.log(tokenData?.data?.token);
        const token = tokenData?.data?.token;

        const form = e.target;

        const formData = new FormData(form);

        const updatedIdea = Object.fromEntries(formData.entries());

        // console.log(updatedIdea);
        const result = await updateIdea(
            idea._id,
            updatedIdea,
            token
        );
        // console.log(data);
        if (result.modifiedCount > 0) {
            state.close();
            toast.success("Idea Updated Successfully");
            router.refresh()
        }
        else {
            toast.error("Plz frist change any text")
        }
        // console.log(result);



    }




    const inputStyle =
        "w-full px-4 py-3 rounded-2xl border border-gray-200 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md text-sm md:text-base text-gray-800 dark:text-gray-200 outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-all duration-300 placeholder:text-gray-400";

    const textareaStyle =
        `${inputStyle} resize-none`;

    return (
        <Modal state={state}>

            <Button
                variant="secondary"
                className="rounded-xl px-4 py-2 font-medium shadow-sm hover:shadow-md transition-all duration-300"
            >
                <Pencil size={16} />
                Edit
            </Button>

            <Modal.Backdrop className="bg-black/50 backdrop-blur-sm">
                <Modal.Container placement="center">
                    <Modal.Dialog className="w-full max-w-5xl mx-3 sm:mx-6 rounded-3xl overflow-hidden border border-white/10 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-2xl">
                        <Modal.CloseTrigger />

                        <Modal.Body className="p-0">
                            <Surface
                                variant="default"
                                className="bg-transparent"
                            >
                                <form
                                    onSubmit={handleEditIdea}
                                    className="w-full"
                                >

                                    <div className="p-5 sm:p-8 md:p-10 space-y-7">


                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                                    Idea Title
                                                </label>

                                                <input defaultValue={idea.IdeaTitle}
                                                    name="IdeaTitle"
                                                    placeholder="Enter idea title"
                                                    className={inputStyle}
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                                    Short Description
                                                </label>

                                                <input defaultValue={idea.ShortDescription}
                                                    name="ShortDescription"
                                                    placeholder="Short summary"
                                                    className={inputStyle}
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                                    Category
                                                </label>

                                                <select
                                                    name="Category"
                                                    defaultValue={idea.Category}
                                                    className={inputStyle}
                                                >

                                                    <option value="Tech">Tech</option>
                                                    <option value="Health">Health</option>
                                                    <option value="AI">AI</option>
                                                    <option value="Education">Education</option>
                                                    <option value="Lifestyle">Lifestyle</option>
                                                </select>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                                    Tags
                                                </label>

                                                <input
                                                    defaultValue={idea.Tags}
                                                    name="Tags"
                                                    placeholder="AI, Startup, SaaS"
                                                    className={inputStyle}
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                                    Image URL
                                                </label>

                                                <input
                                                    defaultValue={idea.ImageURL}
                                                    name="ImageURL"
                                                    placeholder="https://example.com/image.jpg"
                                                    className={inputStyle}
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                                    Estimated Budget
                                                </label>

                                                <input
                                                    defaultValue={idea.EstimatedBudget}
                                                    name="EstimatedBudget"
                                                    type="number"
                                                    placeholder="$5000"
                                                    className={inputStyle}
                                                />
                                            </div>

                                            <div className="space-y-2 md:col-span-2">
                                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                                    Target Audience
                                                </label>

                                                <input
                                                    defaultValue={idea.TargetAudience}
                                                    name="TargetAudience"
                                                    placeholder="Students, Developers, Startups..."
                                                    className={inputStyle}
                                                />
                                            </div>
                                        </div>


                                        <div className="space-y-5">

                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                                    Detailed Description
                                                </label>

                                                <textarea
                                                    defaultValue={idea.ShortDescription}
                                                    name="DetailedDescription"
                                                    placeholder="Explain your idea in detail..."
                                                    className={`${textareaStyle} min-h-[90px]`}
                                                />
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                                        Problem Statement
                                                    </label>

                                                    <textarea
                                                        defaultValue={idea.ProblemStatement}
                                                        name="ProblemStatement"
                                                        placeholder="What problem does it solve?"
                                                        className={`${textareaStyle} min-h-[80px]`}
                                                    />
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                                        Proposed Solution
                                                    </label>

                                                    <textarea
                                                        defaultValue={idea.ProposedSolution}
                                                        name="ProposedSolution"
                                                        placeholder="Describe your solution..."
                                                        className={`${textareaStyle} min-h-[80px]`}
                                                    />
                                                </div>
                                            </div>
                                        </div>


                                        <div className="flex flex-col sm:flex-row gap-3 sm:justify-end pt-2">

                                            <Button
                                                slot="close"
                                                variant="secondary"
                                                className="px-6 py-3 rounded-2xl border border-gray-300 dark:border-zinc-700"
                                            >
                                                Cancel
                                            </Button>

                                            <Button
                                                type="submit"
                                                className="px-7 py-3 rounded-2xl bg-black dark:bg-white text-white dark:text-black font-semibold"
                                            >
                                                Update Idea
                                            </Button>

                                        </div>
                                    </div>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default MyideaEdit;