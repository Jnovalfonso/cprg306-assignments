"use client";

import Link from "next/link";
import ShoppingList from "./shopping-list/page";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const login = async () => {
        await gitHubSignIn();
     };

    const logout = async () => {
        await firebaseSignOut();
    };

    return (
        <main className="m-12">
            <h1 className="text-2xl font-semibold">Week 9</h1>
            <div>
                {user ? (
                    <div className="space-y-10">
                        <p>Welcome, {user.displayName}!</p>
                        <Link className="mr-4 p-2 bg-blue-600 text-white rounded-lg" href="/week-9/shopping-list">Shopping List</Link>
                        <button className="mr-4 p-2 bg-red-600 text-white rounded-lg" onClick={logout}>Sign Out</button>
                    </div>
                ) : (
                    <button onClick={login}>Sign In with GitHub</button>
                )}
            </div>
        </main>
    );

}