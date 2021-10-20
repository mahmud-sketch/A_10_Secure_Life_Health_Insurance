import React, { useEffect, useState } from 'react';
import Policy from './Policy';
import './policies.css'


const Policies = () => {
    const [policies, setPolicies] = useState([])
    useEffect(() => {
        fetch('./insurances.json')
            .then(res => res.json())
            .then(data => { setPolicies(data); console.log(data); });
    }, [])

    return (
        <div>
            <h1 className="center">Our Healthcare Policies</h1>
            <div className="grid">
                {
                    policies.map(policy => <Policy
                        key={policy.id}
                        policy={policy}
                    ></Policy>)
                }
            </div>
        </div>
    );
};

export default Policies;
