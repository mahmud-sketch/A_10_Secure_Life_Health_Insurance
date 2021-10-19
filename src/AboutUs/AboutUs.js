import React from 'react'
import FeaturedOnNewspaper from '../FeaturedOnNewspaper/FeaturedOnNewspaper'
import './about.css'

function AboutUs() {
    return (
        <div>
            <h1 className="header1">About Us</h1>
            <div className="about"><p>Health insurance or medical insurance is a type of insurance that covers the whole or a part of the risk of a person incurring medical expenses. As with other types of insurance is risk among many individuals. By estimating the overall risk of health risk and health system expenses over the risk pool, an insurer can develop a routine finance structure, such as a monthly premium or payroll tax, to provide the money to pay for the health care benefits specified in the insurance agreement.[1] The benefit is administered by a central organization, such as a government agency, private business, or not-for-profit entity.</p>

                <p> According to the Health Insurance Association of America, health insurance is defined as "coverage that provides for the payments of benefits as a result of sickness or injury. It includes insurance for losses from accident, medical expense, disability, or accidental death and dismemberment"</p></div>

            <FeaturedOnNewspaper></FeaturedOnNewspaper>
        </div>
    )
}

export default AboutUs
