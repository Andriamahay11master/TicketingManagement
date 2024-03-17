import React, { useState } from 'react';
import { MenuType } from '@/models/MenuType';
import './menu.scss';
import Link from 'next/link';

interface MenuProps {
    listNav: MenuType[]
    listParameter: MenuType[]
}
export default function Menu({listNav, listParameter} : MenuProps) {
    return (
    <div className="sidebar">
        <div className="sidebar-header">
            <div className="logo-block">
                <span className="logo"></span>
            </div>
            <h1 className="title-h1">
                Dashboard
            </h1>
        </div>
        <ul className="sidebar-menu">
            {listNav.map((item) => (
                <li key={item.nameMenu}><Link href={item.pathMenu}><i className={item.iconMenu}></i> <span>{item.nameMenu}</span></Link></li>
            ))}
            {listParameter.map((item) => (
                <li key={item.nameMenu} className='sidebar-menu-item sidebar-option'><Link href={item.pathMenu}><i className={item.iconMenu}></i> <span>{item.nameMenu}</span></Link></li>
            ))}
        </ul>
    </div>
    );
}