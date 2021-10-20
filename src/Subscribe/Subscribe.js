import React from 'react'
import './Subscribe.css'

function Subscribe() {
    return (
        <div>
            <h2> Fill up the follwing form to subscribe and buy a health policy</h2>
            <form>
                <label htmlFor="name">Name : </label><br />
                <input type="text" name="name" required className="px-2 py-1 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring" /><br />
                <label htmlFor="email">Email : </label><br />
                <input type="text" name="email" required className="px-2 py-1 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring" /><br />
                <label htmlFor="password">Which health insurance policy You want to Buy : </label>
                <br />
                <input type="password" name="password" required className="px-2 py-1 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring" />
                <br />
                <input type="submit" value="submit" className="bg-indigo-900 text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 mt-5 ease-linear transition-all duration-150"
                />

            </form>
            <h1>Thanks for buying a service from us</h1>
        </div>
    )
}

export default Subscribe
