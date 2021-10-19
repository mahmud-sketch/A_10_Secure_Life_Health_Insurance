import React from 'react'

function Subscribe() {
    return (
        <div>
            <h2> fill up the follwing form subscribe and buy a policy</h2>
            <form>
                <label htmlFor="name">Name : </label>
                <input type="text" name="name" required className="px-2 py-1 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring" />
                <br />
                <label htmlFor="email">Email : </label>
                <input type="text" name="email" required className="px-2 py-1 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring" />
                <br />
                <label htmlFor="password">Which insurance You want to Buy : </label>
                <input type="password" name="password" required className="px-2 py-1 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring" />
                <br />
                <input type="submit" value="submit" className="bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                />

            </form>
            <h1>thanks for buying a service from us</h1>
        </div>
    )
}

export default Subscribe
