
import CommentDelete from "./CommentDelete";
import CommentEdit from "./CommentEdit";


const InterActions = ({ comment, handleDeleteComment, updateComment }) => {
    // console.log(updateComment);
    return (
        <div
            key={comment._id || index}
            className="p-3 border rounded-xl bg-white dark:bg-white/5 mt-4"
        >

            <div className="flex justify-between items-start">
                <p className="text-sm font-semibold">
                    {comment.name}
                </p>


                <div className="flex items-center gap-5">



                    <CommentEdit updateComment={updateComment} comment={comment}></CommentEdit>

                    <CommentDelete handleDeleteComment={handleDeleteComment} comment={comment}></CommentDelete>

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
    );
};

export default InterActions;