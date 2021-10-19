import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth';
// import { getAuth } from "firebase/auth";

function Registration() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const { signInUsingGoogle, registerUsingMailandPassword, setUserName } = useAuth();
    // const auth = getAuth();


    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handleMailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleRegistration = e => {
        e.preventDefault();
        registerUsingMailandPassword(name, email, password);
        // setUserName(name);
    }
    return (
        <div>
            <h2>Registration</h2>
            <form onSubmit={handleRegistration}>
                <label htmlFor="name">Name : </label>
                <input type="text" name="name" onBlur={handleNameChange} required className="px-2 py-1 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring" />
                <br />
                <label htmlFor="email">Email : </label>
                <input type="text" name="email" onBlur={handleMailChange} required className="px-2 py-1 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring" />
                <br />
                <label htmlFor="password">password : </label>
                <input type="password" name="password" onBlur={handlePasswordChange} required className="px-2 py-1 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring" />
                <br />
                <input type="submit" value="register" className="bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                />

            </form>

            <br /><br />
            <Link to="/login">already registered?</Link>
            <button onClick={signInUsingGoogle} className="bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            >Google Sign In</button>
        </div>
    )
}

export default Registration