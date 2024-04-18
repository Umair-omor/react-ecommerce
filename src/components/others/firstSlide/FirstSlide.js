import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../../../asstes/images/6.jpg'
import img2 from '../../../asstes/images/7.jpg'
import img3 from '../../../asstes/images/8.jpg'
import img4 from '../../../asstes/images/9.jpg'
import img5 from '../../../asstes/images/10.jpg'
import img6 from '../../../asstes/images/slider_img_1.jpg'
import img7 from '../../../asstes/images/slider_img_2.jpg'

const FirstSlide = () => {
    let settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        // dots: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


  return (
    <div className='border md:h-80 h-auto overflow-hidden mt-3'>
      <Slider {...settings}>
        <div>
            <img src={img1} alt="" />
        </div>
        <div>
            <img src={img2} alt="" />
        </div>
        <div>
            <img src={img3} alt="" />
        </div>
        <div>
            <img src={img4} alt="" />
        </div>
        <div>
            <img src={img5} alt="" />
        </div>
        <div>
            <img src={img6} alt="" />
        </div>
        <div>
            <img src={img7} alt="" />
        </div>
      </Slider>
    </div>
  )
}

export default FirstSlide
