import React, { useState } from 'react'
import '../CSS files/Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
    const [login, setlogin] = useState(true)
    const hclick = () => {
        setlogin((pre) => !pre)
    }

    return (
        <div className='nav_container'>
            <header>
                <nav>
                    <div className="nav-left">
                        <a className="brand"><label className='info'>I</label>nfo<label className='info'>w</label>ind</a>
                    </div>
                    <div className="nav-right">
                        <Link to="/">Dashboard</Link>
                        <Link to="/profile">Profile</Link>
                        <Link to="/requests">Request</Link>
                        <a className="login-button" onClick={hclick}>{login === true ? 'Login' : 'Logout'}</a>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar