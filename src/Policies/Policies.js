import React, { useEffect, useState } from 'react';
import Policy from './Policy';


const Policies = () => {
    const [policies, setPolicies] = useState([])
    useEffect(() => {
        fetch('./insurances.json')
            .then(res => res.json())
            .then(data => { setPolicies(data); console.log(data); });
    }, [])

    return (
        <div id=''>
            <h2 className="">Our Policies</h2>
            <div className="">
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
