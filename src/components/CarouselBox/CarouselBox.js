import React from 'react';
import Carousel from "react-bootstrap/Carousel";

import foto1 from '../../images/foto1.jpg';
import foto2 from '../../images/foto2.jpg';
import './CarouselBoxStyle.css';


const CarouselBox = () => {
    return (
        <div className="CarouselBox">
            <Carousel className="CarouselBox-block">
                <Carousel.Item className="CarouselBox-block-section">
                    <img
                        className="d-block w-100 img-b"
                        src={foto1}
                        alt="foto"
                    />
                    <Carousel.Caption>
                        <h3>ddddddd</h3>
                        <p>wwwwwwwwww</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="CarouselBox-block-section">
                    <img
                        className="d-block w-100 img-b"
                        src={foto2}
                        alt="foto"
                    />
                    <Carousel.Caption>
                        <h3>qqqqqqqq</h3>
                        <p>aaaaaaaa</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CarouselBox;