import React from 'react';
import Slider from 'react-slick';
import { Image } from 'antd';
const SliderComponent = ({ arrImage }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div
            style={{
                padding: '16px',
                background: '#fff',
                paddingBottom: '28px',
                borderRadius: '8px',
            }}>
            <Slider {...settings}>
                {arrImage.map((image, index) => {
                    return (
                        <Image
                            key={index}
                            src={image}
                            alt="slider"
                            width="100%"
                        />
                    );
                })}
            </Slider>
        </div>
    );
};

export default SliderComponent;
