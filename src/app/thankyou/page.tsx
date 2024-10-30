'use client'
import { useState, useEffect } from 'react';
import Link from "next/link";

const ThankYou = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<string | null>('');

    useEffect(() => {
        const lsIsLoggedIn = localStorage.getItem('isLoggedIn');
        if (lsIsLoggedIn) {
            setIsLoggedIn(JSON.parse(lsIsLoggedIn))
        } else {
            setIsLoggedIn("no")
        }
    }, [])


    return (
        <>
        <div className="flex flex-col items-center justify-center bg-white text-slate-900 px-40 py-10 text-center">
            <p className="text-slate-800 text-xl font-bold text-center mb-3">Thank You</p>
            <p>Your information was submitted to our team of immigration attorneys. Expect an email from hello@tryalma.ai</p>
            <Link className="text-white bg-slate-700 hover:bg-slate-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center  dark:focus:ring-blue-800 m-10" href='/'>Go Back to Homepage</Link>
            {isLoggedIn === "yes" && <Link href="/listpage" className="text-slate-700 bg-white border border-slate-300 hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto p-1.5 px-3 text-center dark:focus:ring-blue-800">See Users List</Link>}
        </div>
        
        </>
    )
};

export default ThankYou;