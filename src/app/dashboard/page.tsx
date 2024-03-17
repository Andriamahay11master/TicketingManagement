'use client';
import Menu from '@/components/menu/Menu';
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function Dashboard() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/');
    },
  });

  //data Menu
  const listNav = [
    {
      nameMenu: 'Overview',
      iconMenu: 'fas fa-chart-line',
      pathMenu: 'overview'
    },
    {
      nameMenu: 'Tickets',
      iconMenu: 'fas fa-ticket-alt',
      pathMenu: 'tickets'
    },
    {
      nameMenu: 'Ideas',
      iconMenu: 'fas fa-lightbulb',
      pathMenu: 'ideas'
    },
    {
      nameMenu: 'Contacts',
      iconMenu: 'fas fa-address-book',
      pathMenu: 'contacts'
    },
    {
      nameMenu: 'Agents',
      iconMenu: 'fas fa-users',
      pathMenu: 'agents'
    },
    {
      nameMenu: 'Articles',
      iconMenu: 'fas fa-file-alt',
      pathMenu: 'articles'
    }
  ];

  const listParameter = [
    {
      nameMenu: 'Settings',
      iconMenu: 'fas fa-cog',
      pathMenu: 'settings'
    },
    {
      nameMenu: 'Subscription',
      iconMenu: 'fas fa-credit-card',
      pathMenu: 'subscription'
    }
  ];


  return (
    <main className="appBlock">
      <Menu {...{listNav} } {...{listParameter}}/>
      <div className='text-white'>{session?.data?.user?.email } {session?.data?.user?.name}</div>
      <button className='text-white' onClick={() => signOut()}>Logout</button>
    </main>
  )
}

Dashboard.requireAuth = true