import PostForm from "@/components/PostForm";
import { postData } from "@/lib/action";

const AddIdeaPage = () => {
    return (
        <div>
            <PostForm postdata={postData} />
        </div>
    );
};

export default AddIdeaPage;