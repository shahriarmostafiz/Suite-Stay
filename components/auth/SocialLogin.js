"use client"
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const SocialLogins = ({ mode }) => {
    const handleGoogleLogin = (event) => {
        console.log("pressed");
        signIn("google", { callbackUrl: "http://localhost:3000/bookings" })
    }
    return (
        <>
            <div className="text-center text-sm text-gray-500">
                {
                    mode === "login" ? (<>
                        <Link className="underline hover:text-blue-700" href={"/register"} >Register</Link>
                    </>) : (<>
                        <Link className="underline hover:text-blue-700" href={"/login"} >Login</Link>
                    </>)
                }
                <span> or Sign in with </span>
            </div>
            <div className="flex gap-4">
                <button className=" w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center">
                    <Image src="/fb.png" alt="facebook" width={30} height={30} />
                    <span>Facebook</span>
                </button>
                <button
                    onClick={handleGoogleLogin}
                    className=" w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center">
                    <Image src="/google.png" alt="google" width={30} height={30} />
                    <span>Google</span>
                </button>
            </div>
        </>
    );
};

export default SocialLogins;
