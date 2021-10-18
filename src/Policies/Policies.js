import React, { useEffect, useState } from 'react';


const Policies = () => {
    const [policies, setPolicies] = useState([])
    useEffect(() => {
        fetch('./insurances.json')
            .then(res => res.json())
            .then(data => setPolicies(data));
    }, [])

    return (
        <div id=''>
            <h2 className="text-primary mt-5">Our services</h2>
            <div className="service-container">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Policies;
