
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux'


export default function PrivateRoute({ Component }) {

    const user = useSelector(state => state.TextState)
    //    console.log(user.isAuthenticated)

    return (

        user.isAuthenticated ? <Component /> : <Navigate to='/' />

    )
}
