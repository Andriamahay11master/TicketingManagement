"use client"
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Dashboard() {
    const session = useSession({
        required: true,
        onUnauthenticated() {
            redirect("/");
        },
    });
    return (
    <div>
        <p>Hello, {session.data?.user?.name}</p>
        <button onClick={() => signOut()}>Sign out</button>
    </div>
    );
}

Dashboard.requireAuth = true