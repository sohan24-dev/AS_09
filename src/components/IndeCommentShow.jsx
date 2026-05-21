"use client"

import { getComment } from "@/lib/data";

// import { getComment } from "@/lib/data";


const IndeCommentShow = () => {

    const comment = getComment()
    return (
        <div>
            comments {comment.length}
        </div>
    );
};

export default IndeCommentShow;