"use client"
import React from 'react';
import { signOut } from 'next-auth/react';

const Logout = () => {
    const logout = (event) => {
        signOut({ callbackUrl: "http://localhost:3000/login" })
    }
    return (
        <button
            onClick={logout}
            className='text-white bg-red-500 rounded px-2 py-1 hover:bg-white hover:text-red-500 hover:border-red-500 hover:border-b'> Logout </button>
    );
};

export default Logout;