"use client";


import { authClient } from "@/lib/auth-clients";
import {
    Button,
    Input,
    Label,
    Modal,
    Surface,
    TextField,
    useOverlayState,
} from "@heroui/react";
import { Pencil } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const IdeaCommentEdit = ({ comment, updateComment, setComments }) => {
    // console.log(updateComment);
    const state = useOverlayState();
    const router = useRouter()
    const handleSubmit = async (e) => {
        e.preventDefault();

        // get token
        const tokenData = await authClient.token();
        // console.log(tokenData?.data?.token);
        const token = tokenData?.data?.token;

        // input value
        const updatedText = e.target.text.value;

        // console.log(updatedText);

        const result = await updateComment(comment?._id, updatedText, token);
        // console.log(result);
        if (result.matchedCount > 0) {
            state.close();
            toast.success("Comment updated successfully");

            setComments((prev) =>
                prev.map((c) =>
                    c._id === comment._id
                        ? { ...c, text: updatedText }
                        : c
                )
            );
        }
        else {
            toast.error("plz change after upload")
        }
    };

    return (
        <Modal state={state}>
            <Button variant="secondary">
                <Pencil size={16} />
                Edit
            </Button>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />

                        <Modal.Body className="p-6">
                            <Surface variant="default">

                                <form
                                    onSubmit={handleSubmit}
                                    className="flex flex-col gap-4"
                                >
                                    <TextField defaultValue={comment?.text} className="w-full">
                                        <Label>Comment</Label>
                                        <Input
                                            name="text"

                                            placeholder="Edit comment"
                                        />
                                    </TextField>

                                    <Modal.Footer>
                                        <Button
                                            slot="close"
                                            variant="secondary"
                                        >
                                            Cancel
                                        </Button>

                                        <Button type="submit">
                                            Update Comment
                                        </Button>
                                    </Modal.Footer>
                                </form>

                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default IdeaCommentEdit;