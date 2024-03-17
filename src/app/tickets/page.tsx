"use client"
import Menu from "@/components/menu/Menu";
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { listNav, listParameter } from '@/app/data';

export default function Tickets() {
    const session = useSession({
        required: true,
        onUnauthenticated() {
          redirect('/');
        },
      });
    return (
        <main className="appBlock">
            <Menu {...{listNav} } {...{listParameter}}/>
            <div className='text-white'>{session?.data?.user?.email } {session?.data?.user?.name}</div>
            <button className='text-white' onClick={() => signOut()}>Logout</button>
        </main>
    );
}