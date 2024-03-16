import Forgot from "@/components/forgot/Forgot";
import React from "react";

export default function PageForgot() {
    const dataForgot = {
        title: "Forgot Password",
        formdesc: "Enter your email address and we'll send you a link to reset your password.",
        email: "Email",
        labelButton: "Send reset link",
        routeClick: "/",
    }
    return (
        <main className="appBlock">
            <Forgot {...dataForgot}/>
        </main>
        );
}