import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';
import useAuth from '../hooks/useAuth';
import headerlogo from "../images/insurance.jpg";

function Header() {
    const { user, logout } = useAuth();
    return (
        <div className="header">
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>

                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>

                                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex-shrink-0 flex items-center">
                                <img className="hidden lg:block h-8 w-auto" src={headerlogo} alt="Workflow" />
                            </div>
                            <div className="hidden sm:block sm:ml-6">
                                <div className="flex space-x-4">


                                    <Link to='/home' className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Home</Link>
                                    <Link to='/policies' className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">health insurance</Link>

                                    <Link to='/subscribe' className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">subscribe policy</Link>
                                    <Link to='/claim' className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">claim money</Link>
                                    <Link to='/registration' className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">registration</Link>

                                    {
                                        user.email ? <button onClick={logout} className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">log out</button> :
                                            <Link to='/login' className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">login</Link>
                                    }
                                    {
                                        user.email ? <span className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">welcome {user.displayName} </span> : <span className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">username</span>

                                    }


                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">


                            <div className="ml-3 relative">
                                <div>
                                    <button type="button" className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                        <span className="sr-only">Open user menu</span>
                                        <img className="h-8 w-8 rounded-full" src={user.photoURL} alt="" />
                                    </button>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
                <div className="sm:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <Link to='/home' className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                        <Link to='/policies' className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">health insurance</Link>

                        <Link to='/subscribe' className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">subscribe policy</Link>
                        <Link to='/claim' className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">claim money</Link>
                        <Link to='/registration' className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">registration</Link>
                        {
                            user.email ? <button onClick={logout} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">log out</button> :
                                <Link to='/login' className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">login</Link>
                        }
                        <span className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">{user.displayName} </span>


                    </div>
                </div>



            </nav>


        </div>
    )
}

export default Header


