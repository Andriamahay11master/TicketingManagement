"use client";
import React from "react";
import Link from "next/link";
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

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
    const [emails, setEmails] = useState('');
    const [passwords, setPasswords] = useState('');
    const [logged, setLogged] = useState(false);
    const [errorForm, setErrorForm] = useState(false);
    const router = useRouter();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const changeEmail = (e: any) => {
        setEmails(e.target.value);
    }

    const changePassword = (e: any) => {
        setPasswords(e.target.value);
    }

    const connectAccount = () => {
        signIn('credentials', { email, password, redirect: true, callbackUrl: routeClick });
        setLogged(true);
    }
    return (
        <div className="form-bg">
             <div className="form-block">
                <div className="form-logo">
                    <span className="logo"></span>
                </div>
                <h1 className="title-h1">{title}</h1>
                <p className="form-desc">{formdesc}</p>
                <div className="form-content">
                        <div className="form-group">
                            <label htmlFor="email">{email}</label>
                            <input type="email" id="email" placeholder="Email address" value={emails} onChange={changeEmail}/>
                        </div>
                        <div className="form-group">
                            <div className="label-bloc">
                                <label htmlFor="password">{password}</label>
                                <Link className="btn btn-link" href={routeForgot}>{textForgot}</Link>
                            </div>
                            <div className="input-pass">
                                <input type={showPassword ? "text" : "password"} id="password" placeholder="Password" value={passwords} onChange={changePassword}/>
                                <i className={`icon ${showPassword ? "icon-eye-off" : "icon-eye"}`} onClick={togglePasswordVisibility}></i>
                            </div>
                        </div>
                        <div className="form-group form-submit">
                            <button className="btn btn-primary" onClick={connectAccount} disabled={!email || !password}>{labelButton}</button>
                        </div>
                    <p className="text-signup">{textUser} <Link className="btn btn-link" href={routeSignup}>{labelSignup}</Link></p>
                </div>
                <div className="form-message">
                {logged && <p>Connexion reussie !</p>}
                {errorForm && <p>Vos identifiants sont incorrects</p>}
                </div>
            </div>
            
        </div>
       
    );
}

