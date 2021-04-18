import React from 'react';
import './ContactForm.css';

//Images
import Location from './images/location-pin.svg';
import Phone from './images/phone-call.svg';
import Mail from './images/mail.svg';
import Facebook from './images/facebook-app-logo.svg';
import Twitter from './images/twitter.svg';
import Gmail from './images/gmail.svg';
import Instagram from './images/instagram.svg';
import Linkdin from './images/linkedin-logo.svg';

const ContactForm = () => {
    return (
        
            <div id='Contact' className='form'>
            <section>
                <div className="container">
                    <div className='contactinfo'>
                        <div>
                            <h2>Contact Info</h2>
                            <ul className='info'>
                                <li>
                                    <span><img src={Location} alt='Location'></img></span>
                                    <span>
                                        A-10 Ericson<br/>
                                        G.T.B Nagar,Noida<br/>
                                        110096
                                    </span>
                                </li>
                                <li>
                                    <span><img src={Mail} alt='Mail'></img></span>
                                    <span>
                                        contact@EasyFarm.com
                                    </span>
                                </li>
                                <li>
                                    <span><img src={Phone} alt='Phone'></img></span>
                                    <span>
                                        (+91)-7597757409
                                    </span>
                                </li>
                            </ul>
                            </div>
                            <ul className='sci'>
                                <li><a href="#"><img src={Facebook} alt='Facebook'></img></a></li>
                                <li><a href="#"><img src={Twitter} alt='Twitter'></img></a></li>
                                <li><a href="#"><img src={Gmail} alt='Gmail'></img></a></li>
                                <li><a href="#"><img src={Linkdin} alt='Linkdin'></img></a></li>
                                <li><a href="#"><img src={Instagram} alt='Instagram'></img></a></li>
                            </ul>
                        
                    </div>
                    <div className='contactForm'>
                        <h2>Send a Message</h2>
                        <div className="formbox">
                            <div className="inputBox w50">
                                <input type='text' name='' required></input>
                                <span>First Name</span>
                            </div>
                            <div className="inputBox w50">
                                <input type='text' name='' required></input>
                                <span>Last Name</span>
                            </div>
                            <div className="inputBox w50">
                                <input type='text' name='' required></input>
                                <span>Email Address</span>
                            </div>
                            <div className="inputBox w50">
                                <input type='text' name='' required></input>
                                <span>Mobile Number</span>
                            </div>
                            <div className="inputBox w100">
                                <textarea name='' required></textarea>
                                <span>Write your message here...</span>
                            </div>
                            <div className="inputBox w50">
                                <input type='submit' name='' required></input>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
            </div>
    );
}

export default ContactForm
