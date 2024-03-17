'use client';
import Menu from '@/components/menu/Menu';
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { listNav, listParameter } from '@/app/data';
import Breadcrumb from '@/components/breadcrumb/Breadcrumb';

export default function Dashboard() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/');
    },
  });

  //data Breadcrumb
  const itemsBreadcrumb = [
    {
      label: "Dashboard",
      path: '/',
    }
  ];

  return (
    <main className="appBlock">
      <Menu {...{listNav} } {...{listParameter}}/>
      <div className="appContent">
        <Breadcrumb items={itemsBreadcrumb}/>
        <div className='text-white'>{session?.data?.user?.email } {session?.data?.user?.name}</div>
        <button className='text-white' onClick={() => signOut()}>Logout</button>
      </div>
    </main>
  )
}

Dashboard.requireAuth = true