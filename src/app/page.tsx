'use client'
import { redirect } from 'next/navigation';
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [username, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleChange = (e:any) => {
    console.log('e.target.name', e.target.name)
    switch (e.target.name) {
        case 'username':
            return setUserName(e.target.value);
        case 'password':
            return setPassword(e.target.value);
        default:
            return null;
    }
}
  const handleLogin = () => {
    // check if username and password are correct
    // if so set it in localStorage to use elsewhere in the app
    if (username === 'admin' && password === 'admin1234') {
      // setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", JSON.stringify("yes"));
      redirect('/listpage');
    } else {
      localStorage.setItem("isLoggedIn", JSON.stringify("no"));
    }
  }

  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className="flex items-center justify-items-center font-[family-name:var(--font-geist-sans)] bg-[#D5D9A0]">
      <main className="w-screen flex flex-col items-center justify-center sm:items-center">
            <Image
                src="/alma-logo.png"
                width={308}
                height={113}
                alt="Alma logo"
                className="m-5"
            />
        <div className="flex flex-col mb-5">
          <p className="text-slate-800 text-xl font-bold text-center mb-3">Are you a user? Click to go to assessment form:</p>
          <Link type="submit" className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto p-1.5 px-3 text-center dark:focus:ring-blue-800 mb-10" href="/form">Go to Form</Link>
        </div>
        <p className="text-slate-800 text-xl font-bold text-center mb-3">Are you an admin? Sign in below:</p>
        <div className="flex flex-col mb-5">
          <div className="mb-5">
            <input 
              type="text"
              name="username"
              className={styles.input}
              placeholder="First Name"
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <input 
              type="text"
              name="password" 
              className={styles.input}
              placeholder="Last Name"
              onChange={handleChange}
            />
          </div>
          <button type="button" className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto p-1.5 px-3 text-center dark:focus:ring-blue-800" onClick={handleLogin}>
            Login
          </button>
        </div>
        {/* <Form /> */}
      </main>
    </div>
  );
}

export const styles = {
  input: "bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-slate-300 dark:placeholder-gray-400 text-slate-600 dark:focus:ring-blue-500 dark:focus:border-blue-500",
  checkbox: "inline w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800",
  button: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
  headerText: "text-slate-800 text-xl font-bold text-center mb-3"
}
