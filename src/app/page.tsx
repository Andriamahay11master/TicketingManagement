"use client";
import Login from "@/components/login/Login";
import Image from "next/image";

export default function Home() {
  const dataLogin = {
    title: "Log In to Dashboard",
    formdesc: "Enter your email and password below",
    email: "Email",
    password: "Password",
    labelButton: "Log in",
    routeSignup: "/signup",
    textUser: "Don't have an account?",
    labelSignup: "Sign up",
    textForgot: "Forgot password?",
    routeForgot: "/forgot",
    routeClick: "/home",
  };
  
  return (
    <main className="appBlock">
      <Login {...dataLogin}/>
    </main>
  );
}
