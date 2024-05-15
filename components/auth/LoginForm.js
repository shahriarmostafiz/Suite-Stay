"use client"

import { login } from "@/action";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
    const [loginError, setLoginError] = useState(null)
    const router = useRouter()
    const handleLogin = async (event) => {
        event.preventDefault()

        try {
            const formData = new FormData(event.currentTarget)
            const response = await login(formData)
            console.log(response);
            if (response.error) {
                setLoginError(response.error)
            } else {
                router.push("/bookings")
            }
        } catch (error) {
            setLoginError(error.message)
        }
    }
    return (
        <>
            {
                loginError && <div className="py-4 text-red-600 font-medium">{loginError}</div>
            }
            <form className="login-form" onSubmit={handleLogin}>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" id="email" />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>

                <button type="submit" className="btn-primary w-full mt-4">
                    Login
                </button>
            </form>
        </>
    );
};

export default LoginForm;
