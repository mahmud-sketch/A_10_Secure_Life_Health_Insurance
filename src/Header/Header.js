import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <Link to='/home'>Home</Link>
            <Link to='/policies'>insurance</Link>
            <Link to='/details'>details</Link>
            <Link to='/subscribe'>subscribe</Link>
            <Link to='/claim'>claim</Link>
            <Link to='/login'>login</Link>
            <Link to='/registration'>registration</Link>
        </div>
    )
}

export default Header
