import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { UpdateIsAuthenticated } from '../Slice';
// import { setingEmail } from "../Slice";
// import { useSelector } from 'react-redux';


export default function LoginPage() {

    const [emailText, setEmailText] = useState('')
    const [pasText, setPasText] = useState('')
    const [error, seterror] = useState(false)
    const errorMsg = 'outline-red-500'
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const HandleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, emailText, pasText)
            .then(() => {
                // console.log(res) 
                dispatch(UpdateIsAuthenticated())
                toast.success("Logged in Successfully.")
                seterror(false)
                navigate('/room')
            })
            .catch(() => {
                seterror(true)
                toast.error("Invalid Email or Password.")
            })
    }

    return (

        <div className="min-h-screen flex items-center justify-center bg-green-300 flex-col gap-9">
            <h1 className='text-4xl font-bold'>To Continue, Please Login...</h1>
            <div className="bg-white p-8 rounded shadow-md w-80">
                <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
                <form onSubmit={HandleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className={` p-2 outline-none mt-1 block w-full rounded-md border-gray-300 shadow-md 
                            ${error ? errorMsg : ''}
                            focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50`}
                            placeholder="Enter your email"
                            value={emailText}
                            onChange={(e) => setEmailText(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className={`p-2 outline-none mt-1 block w-full rounded-md border-gray-300 shadow-md 
                            ${error ? errorMsg : ''}
                            focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50`}
                            placeholder="Enter your password"
                            value={pasText}
                            onChange={(e) => setPasText(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white p-3 rounded-md font-semibold active:bg-green-950 hover:bg-green-600"
                    >
                        Sign In
                    </button>
                </form>
                <p className='text-[15px] mt-4'>Didn't have account ? <Link to="/signup" className='text-blue-500 underline hover:text-blue-800 active:text-red-500'>Create Account</Link></p>
            </div>
        </div>
    );
}
