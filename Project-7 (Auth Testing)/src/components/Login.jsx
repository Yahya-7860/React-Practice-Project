import { useState } from 'react'
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase';
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'


export default function Login() {
    const [value, setvalue] = useState({
        email: '',
        password: ''
    })


    const navigate = useNavigate()


    const HandleSubmit = (e) => {
        e.preventDefault();
        // console.log(value)
        signInWithEmailAndPassword(auth, value.email, value.password)
            .then(res => {
                console.log(res)
                toast.success('Sigend in Successfully')
                navigate('/home')
            })
            .catch(error => {
                console.log('already signed in : ' + error);
                toast.error('Invalid Password')
            })
    }

    return (
        <div className='h-screen grid place-items-center bg-black'>
            <div className="bg-white p-8 rounded shadow-md w-80">
                <h2 className="text-2xl font-semibold mb-6">Login</h2>

                {/* Login Form */}
                <form>
                    {/* Name Input */}
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

                    {/* Email Input */}
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

                    {/* Submit Button */}
                    <button
                        onClick={HandleSubmit}
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300"
                    >
                        Login
                    </button>
                    <p className='pt-3'>Don&apos;t have account ? <Link to="/signup" className='text-blue-700 underline active:text-red-500'> Signup Now </Link></p>
                </form>
            </div>
        </div>
    )
}
