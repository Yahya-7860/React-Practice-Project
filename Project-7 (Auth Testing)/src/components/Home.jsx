import { auth } from '../firebase'
import { signOut } from 'firebase/auth'
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

export default function Home() {

    const navigate = useNavigate();
    const [user, setuser] = useState('')

    useEffect(() => {
       auth.onAuthStateChanged((user)=>{
        if(user){
            setuser(user.email)
        }
       })
       
    }, [])
    

    const handlesubmit = () => {
        signOut(auth)
            .then(() => {
                toast.success('Signed Out Successfully')
                navigate('/')
            })
            .catch(() => {
                toast.success('Unable to Sign out')
            })
    }

    return (
        <div className='h-screen grid place-items-center'>
            <div className='text-6xl font-bold '> Welcome to the <span className='bg-black text-white rounded-md px-4 pb-3'> Home Page</span></div>

            <button onClick={handlesubmit} className='bg-red-600 text-2xl font-bold p-3 rounded-md text-white active:bg-red-800'>Logout</button>
            <h1>{user}</h1>
        </div>
    )
}
