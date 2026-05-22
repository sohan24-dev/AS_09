"use client";


import { authClient } from "@/lib/auth-clients";
import {
    Button,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

const LoginForm = () => {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/";



    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const email = formData.get("email");
        const password = formData.get("password");

        const { error } = await authClient.signIn.email({
            email,
            password,
            callbackURL: "/"
        });

        if (error) {
            toast.error(error.message || "Login failed");
        } else {
            toast.success("Login successful");


        }
    };

    const signIn = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: callbackUrl,
        });
    };

    return (
        <div className="min-h-screen flex justify-center items-center px-4 py-10 bg-white dark:bg-black">
            <div className="w-full max-w-md border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-xl shadow-xl rounded-3xl p-6 sm:p-8 transition-all">

                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Welcome Back!
                    </h1>

                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        Login to your account
                    </p>
                </div>

                <Form className="flex flex-col gap-4" onSubmit={onSubmit}>

                    <TextField
                        isRequired
                        name="email"
                        type="email"
                    >
                        <Label>Email</Label>

                        <Input
                            placeholder="john@example.com"
                            className="rounded-xl"
                        />

                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        name="password"
                        type="password"
                    >
                        <Label>Password</Label>

                        <Input
                            placeholder="Enter your password"
                            className="rounded-xl"
                        />

                        <Description>
                            Must be at least 8 characters
                        </Description>

                        <FieldError />
                    </TextField>

                    <div className="pt-2">
                        <Button
                            type="submit"
                            className="w-full h-11 rounded-xl font-semibold bg-black text-white dark:bg-white dark:text-black"
                        >
                            Login
                        </Button>
                    </div>

                    <div className="flex items-center gap-3 my-2">
                        <div className="h-px bg-gray-300 dark:bg-white/10 flex-1" />

                        <span className="text-xs text-gray-500 whitespace-nowrap">
                            or continue with
                        </span>

                        <div className="h-px bg-gray-300 dark:bg-white/10 flex-1" />
                    </div>

                    <Button
                        type="button"
                        onClick={signIn}
                        variant="bordered"
                        className="w-full h-11 rounded-xl flex items-center justify-center gap-2 border border-gray-300 dark:border-white/20"
                    >
                        <Image
                            src="https://www.svgrepo.com/show/475656/google-color.svg"
                            width={20}
                            height={20}
                            alt="google"
                        />

                        Continue with Google
                    </Button>

                    <p className="text-center text-sm text-gray-500 mt-2">
                        Don’t have an account?{" "}
                        <a
                            href="/register"
                            className="text-blue-500 hover:underline font-medium"
                        >
                            Register here
                        </a>
                    </p>

                </Form>
            </div>
        </div>
    );
};

export default LoginForm;