'use client';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Signin() {
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
    routeClick: "/dashboard",
  };
  

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorForm, setErrorForm] = useState(false);
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
};

const connectAccount = async () => {
  try {
    await signIn('credentials', { email, password, redirect: false });
    router.push(dataLogin.routeClick);
  } catch (error) {
    setErrorForm(true);
    console.error("Sign-in error:", error);
  }
};

  return (
    <>
        <div className="form-bg">
             <div className="form-block">
                <div className="logo-block">
                    <span className="logo"></span>
                </div>
                <h1 className="title-h1">{dataLogin.title}</h1>
                <p className="form-desc">{dataLogin.formdesc}</p>
                <div className="form-content">
                        <div className="form-group">
                            <label htmlFor="email">{dataLogin.email}</label>
                            <input type="email" id="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <div className="label-bloc">
                                <label htmlFor="password">{dataLogin.password}</label>
                                <Link className="btn btn-link" href={dataLogin.routeForgot}>{dataLogin.textForgot}</Link>
                            </div>
                            <div className="input-pass">
                                <input type={showPassword ? "text" : "password"} id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                <i className={`icon ${showPassword ? "icon-eye-off" : "icon-eye"}`} onClick={togglePasswordVisibility}></i>
                            </div>
                        </div>
                        <div className="form-group form-submit">
                            <button className="btn btn-primary" onClick={connectAccount} disabled={!email || !password}>{dataLogin.labelButton}</button>
                        </div>
                    <p className="text-signup">{dataLogin.textUser} <Link className="btn btn-link" href={dataLogin.routeSignup}>{dataLogin.labelSignup}</Link></p>
                </div>
                <div className="form-message">
                    {errorForm && <p className="form-error">Invalid email or password</p>}
                </div>
            </div>
            
        </div>
    </>
  )
}