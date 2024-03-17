import React, { useState } from 'react';
import { MenuType } from '@/models/MenuType';
import './menu.scss';
import Link from 'next/link';

interface MenuProps {
    listNav: MenuType[]
    listParameter: MenuType[]
}
export default function Menu({listNav, listParameter} : MenuProps) {

    const [activeLink, setActiveLink] = useState(listNav.length > 0 ? listNav[0].nameMenu : '');

    const handleItemClick = (nameMenu: string) => {
        setActiveLink(nameMenu);
    };

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
                <li key={item.nameMenu}><Link className={activeLink === item.nameMenu ? 'active' : ''} href={item.pathMenu} onClick={() => handleItemClick(item.nameMenu)}><i className={item.iconMenu}></i> <span>{item.nameMenu}</span></Link></li>
            ))}
            {listParameter.map((item) => (
                <li key={item.nameMenu} className='sidebar-menu-item sidebar-option'><Link className={activeLink === item.nameMenu ? 'active' : ''} href={item.pathMenu} onClick={() => handleItemClick(item.nameMenu)}><i className={item.iconMenu}></i> <span>{item.nameMenu}</span></Link></li>
            ))}
        </ul>
    </div>
    );
}