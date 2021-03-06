import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import './PolicyDetails.css'

function PolicyDetails() {
    const id = useParams();
    const [details, setDetails] = useState([])
    useEffect(() => {
        fetch('/insurances.json')
            .then(res => res.json())
            .then(data => { setDetails(data) });
    }, [])

    let policyToSHow;

    for (const detail of details) {
        if (id.id === detail.id) {
            policyToSHow = detail;
        }
    }

    // console.log(policyToSHow?.name);
    return (
        <div className="card">
            <h2>name:{policyToSHow?.name}</h2>
            <h3>cost:{policyToSHow?.cost}</h3>
            <p>info:{policyToSHow?.info}</p>
            <img src={policyToSHow?.img} alt="insurance" />
        </div>
    );
}

export default PolicyDetails
