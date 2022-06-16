import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class Gallery extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
        <div className="container justify-content-center">
        <Slider {...settings}>
          <div >
            <img src="https://i.ibb.co/YtWpGVR/S.jpg" width="50%"/>
          </div>
          <div>
            <img src="https://i.ibb.co/kxJDcbJ/4.jpg" width="50%"/>
          </div>
          <div>
            <img src="https://i.ibb.co/zVBYB5Q/SDRF.jpg"  width="50%" />
          </div>
          <div>
            <img src="https://i.ibb.co/0qp7QcP/3.jpg"  width="50%"/>
          </div>
        </Slider>
      </div>
    );
  }
}
export default Gallery;