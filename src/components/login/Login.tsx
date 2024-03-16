import React from "react";
import Link from "next/link";
import { useState } from "react";
import { auth } from "../../app/firebase/config";
import { useRouter } from "next/navigation";

export interface LoginProps {
    title: string
    formdesc: string
    email: string
    password: string
    labelButton: string
    routeSignup: string
    textUser: string
    labelSignup: string
    textForgot: string
    routeForgot: string
    routeClick: string
}

export default function Login({title, formdesc, email, password, labelButton, routeSignup, textUser, labelSignup, textForgot, routeForgot, routeClick} : LoginProps) {

    const [showPassword, setShowPassword] = useState(false);
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");

    const router = useRouter();

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailValue(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordValue(e.target.value);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await await (auth as any).signInWithEmailAndPassword(emailValue, passwordValue);
            // if ok redirect to dashboard
            router.push(routeClick);

        } catch (error) {
            console.error((error as any).message);
            // Handle login error
        }
    };
    return (
        <div className="form-bg">
             <div className="form-block">
                <div className="form-logo">
                    <span className="logo"></span>
                </div>
                <h1 className="title-h1">{title}</h1>
                <p className="form-desc">{formdesc}</p>
                <div className="form-content">
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">{email}</label>
                            <input type="email" id="email" placeholder="Email address" onChange={handleEmailChange}/>
                        </div>
                        <div className="form-group">
                            <div className="label-bloc">
                                <label htmlFor="password">{password}</label>
                                <Link className="btn btn-link" href={routeForgot}>{textForgot}</Link>
                            </div>
                            <div className="input-pass">
                                <input type={showPassword ? "text" : "password"} id="password" placeholder="Password" onChange={handlePasswordChange}/>
                                <i className={`icon ${showPassword ? "icon-eye-off" : "icon-eye"}`} onClick={togglePasswordVisibility}></i>
                            </div>
                        </div>
                        <div className="form-group form-submit">
                            <button type="submit" className="btn btn-primary" onClick={() => handleLogin}>{labelButton}</button>
                        </div>
                    </form>
                    <p className="text-signup">{textUser} <Link className="btn btn-link" href={routeSignup}>{labelSignup}</Link></p>
                </div>
            </div>
        </div>
       
    );
}