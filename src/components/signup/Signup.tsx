"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";

export interface SignupProps {
    title: string
    formdesc: string
    email: string
    password: string
    passwordagain: string
    labelButton: string
    routeSignin: string
    textUser: string
    labelSignin: string
    routeClick: string
}

export default function Signup({title, formdesc, email, password, passwordagain, labelButton, routeSignin, textUser, labelSignin, routeClick} : SignupProps) {

    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const togglePasswordConfirmationVisibility = () => {
        setShowPasswordConfirmation(!showPasswordConfirmation);
    };

    const createAccount = () => {
        window.location.href = routeClick
    }
    return (
        <div className="form-bg">
             <div className="form-block form-signup">
                <div className="form-logo">
                    <span className="logo"></span>
                </div>
                <h1 className="title-h1">{title}</h1>
                <p className="form-desc">{formdesc}</p>
                <div className="form-content">
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">{email}</label>
                            <input type="email" id="email" placeholder="Email address"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">{password}</label>
                            <div className="input-pass">
                                <input type={showPassword ? "text" : "password"} id="password" placeholder="Password"/>
                                <i className={`icon ${showPassword ? "icon-eye-off" : "icon-eye"}`} onClick={togglePasswordVisibility}></i>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmation-password">{passwordagain}</label>
                            <div className="input-pass">
                                <input type={showPasswordConfirmation ? "text" : "password"} id="confirmation-password" placeholder="Confirm your Password"/>
                                <i className={`icon ${showPasswordConfirmation ? "icon-eye-off" : "icon-eye"}`} onClick={togglePasswordConfirmationVisibility}></i>
                            </div>
                        </div>  
                        <div className="form-group form-submit">
                            <button type="submit" className="btn btn-primary" onSubmit={createAccount}>{labelButton}</button>
                        </div>
                    </form>
                    <p className="text-signup">{textUser} <Link className="btn btn-link" href={routeSignin}>{labelSignin}</Link></p>
                </div>
            </div>
        </div>
       
    );
}