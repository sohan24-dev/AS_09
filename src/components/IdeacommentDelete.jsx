'use client'

import { authClient } from "@/lib/auth-clients";
import { AlertDialog, Button } from "@heroui/react";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const IdeacommentDelete = ({ handleDeleteComment, comment, setComments }) => {
    const router = useRouter();
    const deletecomment = async (id) => {
        const tokenData = await authClient.token();
        // console.log(tokenData?.data?.token);
        const token = tokenData?.data?.token;
        // console.log(token, "token");
        const result = await handleDeleteComment(id, token)
        // console.log(result);
        if (result.deletedCount > 0) {
            setComments((prev) => prev.filter((c) => c._id !== id));
            toast.success("Delete successfully")
        }
        else {
            toast.error("You can only delete your own content.");
        }
    }
    return (
        <AlertDialog>
            <Button variant="danger"><Trash2></Trash2> Delete</Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete comment permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={() => deletecomment(comment._id)} slot="close" variant="danger">
                                Delete Project
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default IdeacommentDelete;