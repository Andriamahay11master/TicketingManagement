"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import {auth} from '@/app/firebase/config'
import { useRouter } from 'next/navigation';

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
    const [emails, setEmails] = useState('');
    const [passwords, setPasswords] = useState('');
    const [passwordsConfirm, setPasswordsConfirm] = useState('');
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
    const Router = useRouter();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const togglePasswordConfirmationVisibility = () => {
        setShowPasswordConfirmation(!showPasswordConfirmation);
    };

    const changeEmail = (e: any) => {
        setEmails(e.target.value);
    }

    const changePassword = (e: any) => {
        setPasswords(e.target.value);
    }

    const changePasswordConfirmation = (e: any) => {
        setPasswordsConfirm(e.target.value);
    }

    const createAccount = async () => {
        try {
            const res = await createUserWithEmailAndPassword(email, password)
            console.log({res})
            sessionStorage.setItem('user', String(true))
            setEmails('');
            setPasswords('')
            setPasswordsConfirm('')
            Router.push(routeClick)
    
        } catch(e){
            console.error(e)
        }
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
                        <div className="form-group">
                            <label htmlFor="email">{email}</label>
                            <input type="email" id="email" placeholder="Email address" value={emails} onChange={changeEmail}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">{password}</label>
                            <div className="input-pass">
                                <input type={showPassword ? "text" : "password"} id="password" placeholder="Password" value={passwords} onChange={changePassword}/>
                                <i className={`icon ${showPassword ? "icon-eye-off" : "icon-eye"}`} onClick={togglePasswordVisibility}></i>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmation-password">{passwordagain}</label>
                            <div className="input-pass">
                                <input type={showPasswordConfirmation ? "text" : "password"} id="confirmation-password" placeholder="Confirm your Password" value={passwordsConfirm} onChange={changePasswordConfirmation}/>
                                <i className={`icon ${showPasswordConfirmation ? "icon-eye-off" : "icon-eye"}`} onClick={togglePasswordConfirmationVisibility}></i>
                            </div>
                        </div>  
                        <div className="form-group form-submit">
                            <button className="btn btn-primary" onClick={createAccount}>{labelButton}</button>
                        </div>
                    <p className="text-signup">{textUser} <Link className="btn btn-link" href={routeSignin}>{labelSignin}</Link></p>
                </div>
            </div>
        </div>
       
    );
}