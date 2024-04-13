import { useState } from 'react';
import { auth } from '../firebase/firebase';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { useDispatch, useSelector } from 'react-redux';
// import { setingEmail } from '../Slice';

export default function SignupOPage() {

    const [emailText, setEmailText] = useState('')
    const [pasText, setPasText] = useState('')
    const [error, seterror] = useState(false)
    const errorMsg = 'outline-red-500'
    const navigate = useNavigate()
    // const dispatch = useDispatch()
    // const aaya = useSelector(state => state.TextState.email)


    const HandleSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, emailText, pasText)
            .then(() => {
                // dispatch(setingEmail(res.user.email))

                toast.success("Account Created Successfully")
                seterror(false)
                navigate('/')
                // console.log('email aaya :' + aaya)

            })
            .catch(() => {
                seterror(true)
                toast.error("Email Already in use. Try Another.")
            })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-200 flex-col gap-9">
            <h1 className=' text-4xl font-bold'>Create Account</h1>
            <div className="bg-white p-8 rounded-lg shadow-md w-80">
                <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>

                <form onSubmit={HandleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className={` mt-1 block w-full rounded-md border-gray-300 shadow-md  focus:border-blue-500 focus:ring focus:ring-blue-500                             
                            ${error ? errorMsg : ''} focus:ring-opacity-50 p-2 outline-none`}
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
                            className=' mt-1 block w-full rounded-md border-gray-300 shadow-md 
                                                       
                            focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 p-2 outline-none'
                            placeholder="Enter your password"
                            value={pasText}
                            onChange={(e) => setPasText(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-3 rounded-md font-semibold hover:bg-blue-600 active:bg-blue-950"
                    >
                        Sign Up
                    </button>
                </form>
            </div>

        </div>
    );
}
