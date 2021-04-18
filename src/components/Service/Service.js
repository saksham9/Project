import React from 'react';
import introImage from './../../images/try.svg';
import './Service.css';

const Service = () => {
    return (
        <div id='Service' className='service'>
            <div className='leftside'>
            <img src={introImage} alt="Intro"></img>
            </div>
            <div className='rightside'>
                <h1>Services</h1>
                <p>Customized Reaserch</p>
                <p>Consulting services</p>
                <p>Market Intelligence</p>
            </div>
        </div>
    )
}

export default Service;