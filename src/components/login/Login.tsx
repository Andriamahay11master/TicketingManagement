import React from "react";
import Link from "next/link";

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

    const connectAccount = () => {
        window.location.href = routeClick
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
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">{email}</label>
                            <input type="email" id="email" placeholder="Email address"/>
                        </div>
                        <div className="form-group">
                            <div className="label-bloc">
                                <label htmlFor="password">{password}</label>
                                <Link className="btn btn-link" href={routeForgot}>{textForgot}</Link>
                            </div>
                            <input type="password" id="password" placeholder="Password"/>
                        </div>
                        <div className="form-group form-submit">
                            <button className="btn btn-primary" onClick={connectAccount}>{labelButton}</button>
                        </div>
                    </form>
                    <p>{textUser} <Link className="btn btn-link" href={routeSignup}>{labelSignup}</Link></p>
                </div>
            </div>
        </div>
       
    );
}