import React from 'react';
import Slider from 'react-slick';

function MultipleSlide() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="px-2">
          <div className="bg-teal-300">1</div>
        </div>
        <div className="px-2">
          <h3 className="bg-teal-300">2</h3>
        </div>
        <div className="px-2">
          <h3 className="bg-teal-300">3</h3>
        </div>
        <div className="px-2">
          <h3 className="bg-teal-300">4</h3>
        </div>
        <div className="px-2">
          <h3 className="bg-teal-300">5</h3>
        </div>
        <div className="px-2">
          <h3 className="bg-teal-300">6</h3>
        </div>
        <div className="px-2">
          <h3 className="bg-teal-300">7</h3>
        </div>
        <div className="px-2">
          <h3 className="bg-teal-300">8</h3>
        </div>
        <div className="px-2">
          <h3 className="bg-teal-300">9</h3>
        </div>
      </Slider>
    </div>
  );
}

export default MultipleSlide;
