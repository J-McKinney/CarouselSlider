import React, { Component } from "react";
import Swiper from "swiper";
// CSS
//swiper css must come first
import "swiper/css/swiper.min.css";
// your custom css must come second to overwrite
// certain stylings in swiper.css
import "./MyCarousel.css";

class MyCarousel extends Component {
  componentDidMount() {
    this.swiper = new Swiper(".swiper-container", {
      // little hand cursor over slides
      grabCursor: true,
      // allows the slides to loop from the last slide back to the first in that direction
      loop: true,
      // helps to center the slides
      centeredSlides: true,
      // allows the slide you're looking at to be the centered slide with the slide before
      // and the slide after to be hanging just off the page from the left and right of it
      slidesPerView: 2,
      // COME BACK TO THE PARALLAX PORTION
      //   parallax: true,
      effect: "coverflow",
      coverflowEffect: {
        rotate: 50, // Slide rotate in degrees
        stretch: 0, // Stretch space between slides (in px)
        depth: 100, // Depth offset in px (slides translate in Z axis)
        modifier: 1, // Effect multipler
        slideShadows: true, // Enables slides shadows
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
  render() {
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">Slide 1</div>
          <div className="swiper-slide">Slide 2</div>
          <div className="swiper-slide">Slide 3</div>
          <div className="swiper-slide">Slide 4</div>
        </div>
        <div className="swiper-pagination" />
        <div className="swiper-button-prev" />
        <div className="swiper-button-next" />
      </div>
    );
  }
}

export default MyCarousel;
