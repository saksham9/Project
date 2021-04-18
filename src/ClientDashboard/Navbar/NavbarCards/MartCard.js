import React from 'react';
import Paper from '@material-ui/core/Paper';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from 'react-bootstrap/Carousel';
import c1 from '../../../images/c1.svg';
import c2 from '../../../images/c2.svg';
import c3 from '../../../images/c3.svg';

const MartCard = () => {
    return (
        <div>
            
            <Carousel style={{maxHeight:"350px"}}>
            <Carousel.Item>
                <img
                style={{maxHeight:"300px"}}
                className="d-block w-100"
                src={c1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                style={{maxHeight:"300px"}}
                className="d-block w-100"
                src={c2}
                alt="Third slide"
                />

                <Carousel.Caption style={{color:"yellow"}}>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                style={{maxHeight:"300px"}}
                src={c3}
                alt="Third slide"
                />

                <Carousel.Caption style={{color:"yellow"}}>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default MartCard
