import Signup from "@/components/signup/Signup";

export default function Formsignup() {

    const dataSignup = {
        title: "Create an account",
        formdesc: "Enter your email and password below",
        email: "Email",
        password: "Password",
        passwordagain: "Confirm Password",
        labelButton: "Sign up",
        routeSignin: "/",
        textUser: "Already have an account?",
        labelSignin: "Sign in",
        routeClick: "/",
    };
    return (
    <main className="appBlock">
        <Signup {...dataSignup}/>
    </main>
    );
}