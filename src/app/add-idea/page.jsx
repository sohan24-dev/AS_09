import PostForm from "@/components/PostForm";
import { postData } from "@/lib/action";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const metadata = {
    title: "IdeaVault | add-idea",
    description: "This page for add-idea",
};

const AddIdeaPage = async () => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    // console.log(token, "tokenDaaa");
    return (
        <div>
            <PostForm postdata={postData} token={token} />
        </div>
    );
};

export default AddIdeaPage;