import React, { Component } from "react";
import Swiper from "swiper";
// CSS
import "swiper/css/swiper.min.css";
import "./MyCarousel.css";

class MyCarousel extends Component {
  componentDidMount() {
    this.swiper = new Swiper(".swiper-container", {
      grabCursor: true,
      loop: true,
      centeredSlides: true,
    });
  }
  render() {
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">Slide 1</div>
          <hr />
          <div className="swiper-slide">Slide 2</div>
          <hr />
          <div className="swiper-slide">Slide 3</div>
          <hr />
          <div className="swiper-slide">Slide 4</div>
        </div>
      </div>
    );
  }
}

export default MyCarousel;
