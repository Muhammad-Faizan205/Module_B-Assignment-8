import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import banner1 from '../images/silider_1.avif';
import banner2 from '../images/silider_2.gif';
import banner3 from '../images/silider_3.avif';
import banner4 from '../images/silider_4.avif';
import banner5 from '../images/silider_5.avif';
import banner6 from '../images/silider_6.avif';
import banner7 from '../images/silider_7.avif';
import banners from '../images/women img.avif';
import bannersmen from '../images/men img.avif';


function Slider_component() {
return (
    <div className='fluid-container'>
        <div className='row'>
            <div className='col-md-9 p-0 m-0'>
                <Carousel variant="dark">

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner1}
                    width="100%"
                    alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner2}
                    width="100%"
                    alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner3}
                    width="100%"
                    alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner4}
                    width="100%"
                    alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner5}
                    width="100%"
                    alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner6}
                    width="100%"
                    alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner7}
                    width="100%"
                    alt="Third slide"
                    />
                </Carousel.Item>

                </Carousel>
            </div>

            <div className='col-md-3 d-flex p-0 m-0'>
                <img src={banners} width="167.5px" />
                <img src={bannersmen} width="167.5px" />

            </div>
        </div>
    </div>
);
}

export {Slider_component};