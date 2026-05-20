import LoginForm from "@/components/LoginForm";
import { Suspense } from "react";


export const metadata = {
    title: "IdeaVault | Login",
    description: "This page is for user login",
};

const LoginPage = () => {
    return <Suspense><LoginForm /></Suspense>;
};

export default LoginPage;