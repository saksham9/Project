import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,faMinus } from '@fortawesome/free-solid-svg-icons'
import './Faq.css';

const Faq = () => {
    return (
        <div className="section" id="Faq">
        <h1>FAQ</h1>
        <div className='container'>
            <div className="accordion">
                <div className="accordion-item" id="Que1">
                    <a className="accordion-link" href="#Que1">
                        How to login to portal?
                        <FontAwesomeIcon className='add' icon={faPlus}/>
                        <FontAwesomeIcon className='remove'  icon={faMinus}/>
                    </a>
                    <div className="answer">
                       <p> Click on login/Signup button if you already a member of EasyFarm than simply login or
                        if you can register by click on SignUp button.</p>
                    </div>
                </div>
                <div className="accordion-item" id="Que2">
                    <a className="accordion-link" href="#Que2">
                        How to login to portal?
                        <FontAwesomeIcon className='add' icon={faPlus}/>
                        <FontAwesomeIcon className='remove' icon={faMinus}/>
                    </a>
                    <div className="answer">
                       <p> Click on login/Signup button if you already a member of EasyFarm than simply login or
                        if you can register by click on SignUp button.</p>
                    </div>
                </div>
                <div className="accordion-item" id="Que3">
                    <a className="accordion-link" href="#Que3">
                        How to login to portal?
                        <FontAwesomeIcon className='add' icon={faPlus}/>
                        <FontAwesomeIcon className='remove' icon={faMinus}/>
                    </a>
                    <div className="answer">
                       <p> Click on login/Signup button if you already a member of EasyFarm than simply login or
                        if you can register by click on SignUp button.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Faq
