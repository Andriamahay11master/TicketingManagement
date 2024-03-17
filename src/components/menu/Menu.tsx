import React, { useState } from 'react';
import { MenuType } from '@/models/MenuType';
import { usePathname } from 'next/navigation'
import './menu.scss';
import Link from 'next/link';

interface MenuProps {
    listNav: MenuType[]
    listParameter: MenuType[]
}
export default function Menu({listNav, listParameter} : MenuProps) {

    const pathname = usePathname();

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
            {listNav.map((item) => {
                const isActive = pathname === item.pathMenu

                return (
                    <li key={item.nameMenu}><Link className={isActive ? 'active' : ''} href={item.pathMenu}><i className={item.iconMenu}></i> <span>{item.nameMenu}</span></Link></li>
                )
                
            })}

            {listParameter.map((item) => {
                const isActive2 = pathname === item.pathMenu
                return (
                    <li className="sidebar-menu-item sidebar-option" key={item.nameMenu}><Link className={isActive2 ? 'active' : ''} href={item.pathMenu}><i className={item.iconMenu}></i> <span>{item.nameMenu}</span></Link></li>
                )
            })}
        </ul>
    </div>
    );
}