import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signInUsingGoogle, processLogin, } = useAuth();
    // console.log(useAuth());

    const handleMailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleLogin = e => {
        e.preventDefault();
        processLogin(email, password);
    }
    return (
        <div>
            <h2>Please Login</h2>
            <form onSubmit={handleLogin}>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" onBlur={handleMailChange} required className="px-2 py-1 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring" />
                <br />
                <label htmlFor="password">password</label>
                <input type="password" name="password" onBlur={handlePasswordChange} required className="px-2 py-1 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring" />
                <br />
                <input type="submit" value="log in" className="bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                />

            </form>

            <br /><br />
            <button onClick={signInUsingGoogle} className="bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button">Google Sign In</button>
            <br />

            <Link to="/registration">New User?</Link>
        </div >
    )
}

export default Login