import React from 'react'
import AboutUs from '../AboutUs/AboutUs'
import Carousel from '../Carousel/Carousel'
import Policies from '../Policies/Policies'
import './Home.css'

function Home() {
    return (
        <div>
            <Carousel></Carousel>
            <div className='body'>
                <AboutUs></AboutUs>
                <Policies></Policies>

            </div>

        </div>
    )
}

export default Home
