"use client";   
import { signOut, signIn, useSession } from "next-auth/react";
import { PrimaryButton } from "./Button";

export const AppBar = () => {
    const session = useSession();

    return (
        <div className="border-b px-2 py-2 flex justify-between" >
            <div className="text-2xl font-bold flex-col justify-center items-center" >
                DCEX
            </div>
            <div>
                {session.data?.user ? (
                    <PrimaryButton onClick={() => signOut()}>Sign Out</PrimaryButton>
                ) : (
                    <PrimaryButton onClick={() => signIn()}>Sign In</PrimaryButton>
                )}
            </div>
        </div>
    );
};