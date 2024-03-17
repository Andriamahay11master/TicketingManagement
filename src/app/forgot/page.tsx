'use client';
import { useState } from 'react';
import { auth } from '../firebase';
import { sendPasswordResetEmail } from "firebase/auth";
import Link from 'next/link';
import { Poppin } from '@/components/poppin/Poppin';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const resetEmail = () => {
    sendPasswordResetEmail(auth, email);
    setSuccess(true);
  };

  return (
    <>
    <div className="form-bg">
             <div className="form-block">
                <div className="form-logo">
                    <span className="logo"></span>
                </div>
                <h1 className="title-h1">Forgot Password</h1>
                <p className="form-desc">Enter your email address</p>
                  <div className="form-content">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="form-group form-submit">
                        <button className="btn btn-primary" onClick={resetEmail} disabled={!email}>Send</button>
                    </div>
                  </div>
                  <Link className="btn btn-link btn-back" href="/">Back to sign in</Link>
            </div>
            {success && <Poppin title="Email sent" message="Check your email for the reset password link" linkBtn="/" valBtn="Back to sign in"/>}
        </div>
    </>
  )
}