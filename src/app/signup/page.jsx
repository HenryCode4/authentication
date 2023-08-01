'use client';
import Link from "next/link"
import React, { useEffect, useState } from 'react'
import {useRouter} from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";



export default function SignupPage(){
    const router = useRouter();

    const [user, setUser] = useState({
        email: "",
        password: "",
        username: "",
    })

    const [buttonDisabled, setButtonDisabled] = useState(false)
    const [loading, setLoading] = useState(false);

    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user)
            console.log("Signup success", response.data);
            router.push("/login");
    
        } catch (error) {
            console.log("signup failed", error.message)
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="p-12 font-bold text-4xl">Signup</h1>
            <hr />
            <label htmlFor="username">username</label>
            <input 
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            id="username"
            type="text"
            value={user.username}
            onChange={(e)=> setUser({...user, username: e.target.value})} 
            placeholder="Username"/>


            <label htmlFor="email">email</label>
            <input 
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            id="email"
            type="text"
            value={user.email}
            onChange={(e)=> setUser({...user, email: e.target.value})} 
            placeholder="Email"/>


            <label htmlFor="password">Password</label>
            <input 
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            id="password"
            type="password"
            value={user.password}
            onChange={(e)=> setUser({...user, password: e.target.value})} 
            placeholder="Password"/>

            <button 
            onClick={onSignup}
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">{loading ? "Processing" : "Signup"}</button>
            <Link href="/login">Visit Login Page</Link>
        </div>
    )
}