import React from 'react'
import { useDispatch } from 'react-redux';
import { UpdateIsAuthenticated } from '../Slice';
import { toast } from 'react-toastify';
import { auth } from '../firebase/firebase';
import { signOut } from 'firebase/auth';

export default function Header() {
    const dispatch = useDispatch()
    const HandleClick = () => {

        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("signed Out")
        }).catch(() => {
            // An error happened.
            console.log('Error in sign out')
        });

        toast("Logged Out")
        dispatch(UpdateIsAuthenticated());
    }
    return (
        <header className="bg-green-700 p-3 flex justify-between items-center ">
            <div className="text-white text-xl font-bold">Chat App</div>
            <button
                onClick={HandleClick}
                className="bg-white hover:bg-gray-200 text-green-700 font-semibold py-2 px-4 rounded shadow active:bg-green-800 active:text-white  duration-100"
            >
                Logout
            </button>
        </header>
    );
};
