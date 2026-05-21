"use client";

import { useEffect, useState } from "react";
import { getComment } from "@/lib/data";
import IdeacommentDelete from "./IdeacommentDelete";
import IdeaCommentEdit from "./IdeaCommentEdit";
import { MessageCircle } from "lucide-react";

const IndeCommentShow = ({ refresh, idea, handleDeleteComment, updateComment }) => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchComments = async () => {
            setLoading(true);

            try {
                const data = await getComment();

                const filtered = data.filter(
                    (comment) => comment.ideaId === idea._id
                );

                setComments(filtered);
            } catch (error) {
                // console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchComments();
    }, [refresh, idea?._id]);

    if (loading) {
        return <div className="text-sm text-gray-500">Loading comments...</div>;
    }

    if (!comments.length) {
        return <div className="flex flex-col items-center justify-center py-10 px-4 border border-dashed rounded-xl bg-gray-50 dark:bg-white/5">

            <MessageCircle className="w-10 h-10 text-gray-400" />

            <h3 className="mt-3 text-lg font-semibold text-gray-700 dark:text-white">
                No comments yet
            </h3>

            <p className="text-sm text-gray-400 mt-1 text-center max-w-xs">
                Be the first to add a comment and start the discussion.
            </p>
        </div>
    }

    return (
        <div className="mt-4 space-y-4">
            {comments.map((comment, index) => (
                <div
                    key={comment._id || index}
                    className="p-3 border rounded-xl bg-white dark:bg-white/5"
                >
                    <div className="flex justify-between items-start">
                        <p className="text-sm font-semibold">
                            {comment.name}
                        </p>

                        <div className="flex items-center gap-5">
                            <IdeaCommentEdit setComments={setComments} comment={comment} updateComment={updateComment}></IdeaCommentEdit>

                            <IdeacommentDelete setComments={setComments} handleDeleteComment={handleDeleteComment} comment={comment}></IdeacommentDelete>
                        </div>
                    </div>

                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                        {comment.text}
                    </p>

                    <p className="text-xs text-gray-400 mt-2">
                        {comment.createdAt &&
                            new Date(comment.createdAt).toLocaleString()}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default IndeCommentShow;