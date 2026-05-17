"use client";
import { authClient } from "@/lib/auth-clients";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";

const RegisterPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const data = Object.fromEntries(formData.entries());

        // console.log(data);

        const { data: session, error } = await authClient.signUp.email({
            email: data.email,
            password: data.password,
            name: data.name,
            image: data.image,
            callbackURL: "/dashboard",
        });

        if (error) {
            toast.error(error.message)
            return;
        }

        console.log(session);
    };



    return (
        <div className="flex justify-center items-center px-4 py-10">
            <div className="w-full max-w-md rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-xl shadow-xl p-6 sm:p-8">


                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Create Account
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        Join with us and start your journey
                    </p>
                </div>


                <Form className="flex flex-col gap-4" onSubmit={onSubmit}>


                    <TextField
                        isRequired
                        name="name"
                        type="text"
                        validate={(value) => {
                            if (value.length < 3) {
                                return "Name must be at least 3 characters";
                            }
                            return null;
                        }}
                    >
                        <Label>Full Name</Label>
                        <Input placeholder="John Doe" />
                        <FieldError />
                    </TextField>


                    <TextField
                        isRequired
                        name="photo"
                        type="url"
                        validate={(value) => {
                            try {
                                new URL(value);
                                return null;
                            } catch {
                                return "Please enter a valid image URL";
                            }
                        }}
                    >
                        <Label>Photo URL</Label>
                        <Input placeholder="https://example.com/photo.jpg" />
                        <FieldError />
                    </TextField>


                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                            ) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>


                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>
                            Must be at least 8 characters with 1 uppercase and 1 number
                        </Description>
                        <FieldError />
                    </TextField>

                    <div className="flex flex-col sm:flex-row gap-3 mt-2">
                        <Button
                            type="submit"
                            className="w-full bg-black text-white dark:bg-white dark:text-black hover:opacity-90"
                        >
                            <Check className="w-4 h-4 mr-1" />
                            Create Account
                        </Button>
                    </div>


                    <div className="flex items-center gap-3 my-2">
                        <div className="flex-1 h-px bg-gray-200 dark:bg-white/10"></div>
                        <span className="text-sm text-gray-400">OR</span>
                        <div className="flex-1 h-px bg-gray-200 dark:bg-white/10"></div>
                    </div>


                    <Button
                        type="button"
                        variant="bordered"
                        className="w-full border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10"
                    >
                        <Image
                            width={5}
                            height={5}
                            src="https://www.svgrepo.com/show/475656/google-color.svg"
                            alt="google"
                            className="w-5 h-5"
                        />
                        Login with Google
                    </Button>


                    <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="font-semibold text-black dark:text-white hover:underline"
                        >
                            Login here
                        </Link>
                    </p>
                </Form>
            </div>
        </div>
    );
};

export default RegisterPage;