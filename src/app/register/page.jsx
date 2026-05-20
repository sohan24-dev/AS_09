import RegisterPage from "@/components/Register";
import { Suspense } from "react";



export const metadata = {
    title: "IdeaVault | Register",
    description: "This page is for user login",
};

const Register = () => {
    return <Suspense><RegisterPage></RegisterPage></Suspense>;
};

export default Register;