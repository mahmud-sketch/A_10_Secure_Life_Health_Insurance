import React from 'react'
import { Link } from 'react-router-dom';
import './policy.css';

function Policy(props) {
    const { id, name, cost, info, img } = props.policy;
    return (
        <div className="card">
            <h3>Name:{name}</h3>
            <h4>Cost:{cost}</h4>
            <p><h5>Info:{info}</h5></p>
            <img src={img} alt="insurance" />
            <Link to={`/details/${id}`}><button className="bg-indigo-900 text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 middle"
            >buy policy</button></Link>

        </div>
    )
}

export default Policy
