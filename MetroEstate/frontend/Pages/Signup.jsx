import React, { useContext } from 'react'
import axios from 'axios'
import { useState } from 'react';
import { authDataContext } from '../src/Context/authContext';

function Signup() {
    let {serverUrl} = useContext(authDataContext)
    const [formData,setFormData] = useState({
        name:"",
        email:"",
        password:"",
        phone:"",
        role:"buyer"
    });

    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        });
    };

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const res = await axios.post(serverUrl+"/api/signUp",
                formData,{withCredentials:true}
            )
        }
        catch(error){
            console.log(error?.response?.data?.message)
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 px-4">

            <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">

                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Create Account
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">

                    <input
                        name="name"
                        placeholder="Full Name"
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />

                    <input
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />

                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />

                    <input
                        name="phone"
                        placeholder="Phone Number"
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />

                    <select
                        name="role"
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    >
                        <option value="buyer">Buyer</option>
                        <option value="seller">Seller</option>
                        <option value="both">Both</option>
                    </select>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md"
                    >
                        Sign Up
                    </button>

                </form>

                <p className="text-center text-sm text-gray-500 mt-4">
                    Already have an account?{" "}
                    <span className="text-blue-600 cursor-pointer hover:underline">
                        Login
                    </span>
                </p>

            </div>

        </div>
    );
}

export default Signup
