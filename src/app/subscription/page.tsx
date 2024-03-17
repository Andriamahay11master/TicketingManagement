"use client"
import Menu from "@/components/menu/Menu";
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { listNav, listParameter } from '@/app/data';
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import Header from "@/components/header/Header";

export default function Subscription() {
    const session = useSession({
        required: true,
        onUnauthenticated() {
          redirect('/');
        },
      });

    //data Breadcrumb
    const itemsBreadcrumb = [
        {
            label: "Subscription",
            path: '/subscription',
        }
    ];

    const dataHeader = {
        userinfo: (session?.data?.user?.email)?.toString() || '',
        srcImg: "/images/user-default.avif",
        titleImg: "Profile",
        altImg: "Profile",
      }

    return (
        <main className="appBlock">
            <Menu {...{listNav} } {...{listParameter}}/>
            <div className="appContent">
                <div className="appTop">
                    <div className="appLeft">
                        <Breadcrumb items={itemsBreadcrumb}/>
                    </div>
                    <div className="appRight">
                        <Header {...dataHeader}/>
                    </div>
                </div>
                <div className="appList">
                    <p>Coming Soon - Content Component Subscription</p>
                </div>
            </div>
        </main>
    );
}