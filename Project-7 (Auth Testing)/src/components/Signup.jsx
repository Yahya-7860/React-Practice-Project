import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


export default function Signup() {

    const navigate = useNavigate()
    const [error, seterror] = useState(false)
    const [value, setvalue] = useState({
        email: '',
        password: ''
    })

    const HandleSubmit = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, value.email, value.password)
            .then((res) => {
                console.log(res);
                toast.success('Sign up successful!');
                navigate('/login');
            })
            .catch((error) => {
                console.error(error.message);
                toast.error('Email is already in use.');
            });
    };

    return (
        <>
            <div className='bg-black h-screen grid place-items-center'>
                <div className="bg-white p-8 rounded shadow-md w-80">
                    <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Sign Up</h2>

                    {/* Signup Form */}
                    <form>
                        {/* Email Input */}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500"
                                onChange={(e) =>
                                    setvalue((prev) => ({ ...prev, email: e.target.value }))
                                }
                            />
                        </div>

                        {/* Password Input */}
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500"
                                onChange={(e) =>
                                    setvalue((prev) => ({ ...prev, password: e.target.value }))
                                }
                            />
                        </div>

                        {/* Signup Button */}
                        <button
                            onClick={HandleSubmit}
                            type="submit"
                            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-300"
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </>

    )

}
