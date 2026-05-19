'use client'

import { authClient } from "@/lib/auth-clients";
import { AlertDialog, Button } from "@heroui/react";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const MyideaDelete = ({ handleDelete, idea }) => {
    const router = useRouter();
    // console.log(idea._id);
    const deletItem = async (id) => {
        const tokenData = await authClient.token();
        // console.log(tokenData?.data?.token);
        const token = tokenData?.data?.token;
        // console.log(token, "token");
        if (token) {
            handleDelete(id, token)
            toast.success("Delete successfully")
            router.refresh();
        }
        // console.log(tokenData);

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
                            <AlertDialog.Heading>Delete Your idea permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={() => deletItem(idea._id)} slot="close" variant="danger">
                                Delete Project
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default MyideaDelete;