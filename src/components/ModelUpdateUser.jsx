"use client";

import { useEffect } from "react";
import { authClient } from "@/lib/auth-clients";
import { BiEdit } from "react-icons/bi";
import toast from "react-hot-toast";

import {
    Button,
    Input,
    Label,
    Modal,
    Surface,
    TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";

const ModelUpdateUser = ({ session }) => {
    const router = useRouter();

    const onSubmit = async (e, close) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const name = formData.get("name");
        const image = formData.get("image");

        try {
            const { error } = await authClient.updateUser({
                name,
                image,
            });

            if (error) {
                toast.error(error.message || "Update failed");
                return;
            }

            toast.success("Profile updated successfully");
            close();
            router.refresh()
        } catch (err) {
            toast.error("Something went wrong");
        }
    };

    return (
        <div className="flex justify-center mt-6">

            <Modal>


                <Button
                    variant="secondary"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl 
                    bg-gradient-to-r from-blue-600 to-indigo-600 
                    text-white font-medium shadow-md 
                    hover:shadow-lg hover:scale-[1.02] transition"
                >
                    <BiEdit size={18} />
                    Edit Profile
                </Button>

                <Modal.Backdrop>
                    <Modal.Container placement="center">

                        <Modal.Dialog className="sm:max-w-md">

                            <Modal.CloseTrigger />


                            <Modal.Header>
                                <Modal.Heading>Update Profile</Modal.Heading>
                                <p className="mt-1.5 text-sm text-muted">
                                    Update your name and profile photo
                                </p>
                            </Modal.Header>


                            <Modal.Body className="p-6">
                                <Surface variant="default">

                                    <form
                                        onSubmit={(e) => {
                                            const closeBtn = document.querySelector("[slot='close']");
                                            onSubmit(e, () => closeBtn?.click());
                                        }}
                                        className="flex flex-col gap-4"
                                    >


                                        <TextField defaultValue={session?.user?.name || ""} name="name">
                                            <Label>Full Name</Label>
                                            <Input
                                                name="name"

                                                placeholder="Enter your name"
                                            />
                                        </TextField>


                                        <TextField defaultValue={session?.user?.image || ""} name="image">
                                            <Label>Photo URL</Label>
                                            <Input
                                                name="image"

                                                placeholder="Paste image URL"
                                            />
                                        </TextField>


                                        <div className="flex gap-3 pt-3">

                                            <Button
                                                slot="close"
                                                variant="secondary"
                                                className="w-full"
                                            >
                                                Cancel
                                            </Button>

                                            <Button
                                                type="submit"
                                                className="w-full bg-blue-600 text-white"
                                            >
                                                Save Changes
                                            </Button>

                                        </div>

                                    </form>

                                </Surface>
                            </Modal.Body>

                        </Modal.Dialog>

                    </Modal.Container>
                </Modal.Backdrop>

            </Modal>

        </div>
    );
};

export default ModelUpdateUser;