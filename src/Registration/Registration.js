import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth';

function Registration() {
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <h2>Registration</h2>
            <Link to="/login">already registered?</Link>
            <button onClick={signInUsingGoogle}>Google Sign In</button>
        </div>
    )
}

export default Registration
