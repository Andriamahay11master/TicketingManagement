"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";

export interface ForgotProps {
    title: string
    formdesc: string
    email: string
    labelButton: string
    routeClick: string
}

export default function Forgot({title, formdesc, email, labelButton, routeClick} : ForgotProps) {

    const resetPassword = () => {
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
                        <div className="form-group form-submit">
                            <button type="submit" className="btn btn-primary" onSubmit={resetPassword}>{labelButton}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}