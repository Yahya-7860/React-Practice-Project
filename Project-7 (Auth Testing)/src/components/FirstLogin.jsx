import React from 'react'
import { Link } from 'react-router-dom'

export default function FirstLogin() {
    return (
        <div className='h-screen grid place-items-center'>
            <div className='text-6xl font-bold '>  <span className='bg-red-700 text-white rounded-md px-4 pb-3'>Login</span> First</div>
            <Link to='/login' ><button className='p-4 bg-blue-700 rounded-md text-2xl text-white active:bg-blue-800 hover:bg-blue-600'>Go to Login</button></Link>

        </div>
    )
}
