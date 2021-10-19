import React from 'react'
import { Link } from 'react-router-dom';

function Policy(props) {
    const { id, name, cost, info, img } = props.policy;
    return (
        <div>
            <h2>name:{name}</h2>
            <h3>cost:{cost}</h3>
            <p>inf:{info}</p>
            <img src={img} alt="insurance" />
            <Link to={`/details/${id}`}><button>buy policy</button></Link>

        </div>
    )
}

export default Policy
