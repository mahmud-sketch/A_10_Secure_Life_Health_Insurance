import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';
import useAuth from '../hooks/useAuth'

function Header() {
    const { user, logout } = useAuth();
    return (
        <div className="header">
            <Link to='/home'>Home</Link>
            <Link to='/policies'>insurance</Link>

            <Link to='/subscribe'>subscribe</Link>
            <Link to='/claim'>claim</Link>
            <Link to='/registration'>registration</Link>
            <span>{user.displayName} </span>
            {
                user.email ? <button onClick={logout}>log out</button> :
                    <Link to='/login'>login</Link>
            }
        </div>
    )
}

export default Header
