"use client"
import React, { useEffect } from "react";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
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
    const [formDisabled, setFormDisabled] = useState(true);

    const Router = useRouter();

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailValue(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordValue(e.target.value);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            signIn("Credentials", {
                email: emailValue,
                password: passwordValue,
                redirect: false,
            });
            Router.push("/dashboard")
        } catch (error) {
            console.log(error);
            // Handle error
        }
    };

    useEffect(() => {
        setFormDisabled(!(emailValue && passwordValue));
    }, [emailValue, passwordValue]);

    return (
        <div className="form-bg">
             <div className="form-block">
                <div className="form-logo">
                    <span className="logo"></span>
                </div>
                <h1 className="title-h1">{title}</h1>
                <p className="form-desc">{formdesc}</p>
                <div className="form-content">
                    <form onSubmit={handleSubmit}>
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
                            <button type="submit" className="btn btn-primary" disabled={formDisabled}>{labelButton}</button>
                        </div>
                    </form>
                    <p className="text-signup">{textUser} <Link className="btn btn-link" href={routeSignup}>{labelSignup}</Link></p>
                </div>
            </div>
        </div>
       
    );
}