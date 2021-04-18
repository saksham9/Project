import React from 'react';
import {Route,Switch} from 'react-router-dom';
import MyNavbar from '../myNavbar/myNavbar.component';
import Intro1 from '../Intro/intro1';
import Service from '../Service/Service';
import Faq from '../Faq/Faq';
import ContactForm from '../../pages/ContactForm/contactForm';
import {Parallax} from 'react-parallax';
import './Home.css';

function Home() {
  return (
    <div className="App">
    <MyNavbar/>
    <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require('../../images/HERO.jpg')}
            bgImageAlt="the dog"
            strength={-200}
        >
            <Intro1/>
        </Parallax>
    <Service/>
    <Faq/>
    <ContactForm/>
    </div>
  );
}

export default Home;
