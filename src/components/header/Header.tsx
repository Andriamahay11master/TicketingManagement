"use client"
import React, { useState } from 'react';
import './header.scss';
import Image from 'next/image';
import { signOut } from 'next-auth/react';
import Router from 'next/router';

interface HeaderProps {
    userinfo: string;
    srcImg: string;
    titleImg: string;
    altImg: string;
}
export default function Header ({userinfo, srcImg, titleImg, altImg} : HeaderProps) {
    
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleSignOut = () => {
        signOut();
        Router.push('/');
    };

    const showSearchBar = () => {
        setIsSearchOpen(!isSearchOpen);
    };
    return (
        <header className="header">
            <div className="header-left">
                <div className="search-bar">
                    <input type="text" className={isSearchOpen ? 'input-forms open' : 'input-forms'} placeholder="Search..." />
                    <button className="btn btn-icon btn-search" onClick={showSearchBar}><i className="fas fa-search"></i></button>
                </div>
                <div className="notification-icon">
                    <i className="fas fa-bell"></i>
                </div>
            </div>
            <div className="header-right">
                <div className="profile" onClick={toggleDropdown}>
                    <div className="profile-content">
                        <span className='profile-name'>{userinfo}</span>
                        <div className="profile-img-block">
                            <Image className="profile-image" width={30} height={30} src={srcImg} title={titleImg} alt={altImg}/>
                        </div>
                    </div>
                    <div className={isDropdownOpen ? 'profile-dropdown open' : 'profile-dropdown'}>
                        <button className="btn btn-link" onClick={handleSignOut}>Sign Out</button>
                    </div>
                </div>
            </div>
        </header>
    );
}
