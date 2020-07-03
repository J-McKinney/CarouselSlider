import React, { Component } from "react";
import Swiper from "swiper";
// CSS

//swiper css must come first
import "swiper/css/swiper.min.css";
// your custom css must come second to overwrite certain stylings in swiper.css
import "./CoverFlowCarousel.css";

class CoverFlowCarousel extends Component {
  componentDidMount() {
    this.swiper = new Swiper(".swiper-container", {
      speed: 800, // controls the speed between each slide when arrow click or grabCursor
      grabCursor: true, // little hand cursor over slides
      loop: true, // allows the slides to loop from the last slide back to the first in that direction
      centeredSlides: true, // helps to center the slides
      slidesPerView: 2, // allows the slide you're looking at to be the centered slide with the slide before and the slide after to be hanging just off the page from the left and right of it
      parallax: true, // Helps focus the users attention to the slide in front/center
      effect: "coverflow", // coverflow is the type of effect on the pictures
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      coverflowEffect: {
        rotate: 50, // Slide rotate in degrees
        stretch: 0, // Stretch space between slides (in px)
        depth: 100, // Depth offset in px (slides translate in Z axis)
        modifier: 1, // Effect multipler
        slideShadows: true, // Enables slides shadows
      },
      pagination: {
        el: ".swiper-pagination", // little dots under the slides for navigation
        clickable: true, // allows you to click on the little dots
      },
      navigation: {
        nextEl: ".swiper-button-next", // arrows on the side of the slides
        prevEl: ".swiper-button-prev", // arrows on the side of the slides
      },
    });
  }

  render() {
    return (
      <>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">Cover Flow Slide 1</div>
            <div className="swiper-slide">Cover Flow Slide 2</div>
            <div className="swiper-slide">Cover Flow Slide 3</div>
            <div className="swiper-slide">Cover Flow Slide 4</div>
          </div>
          <div className="swiper-pagination" />
          <div className="swiper-button-prev" />
          <div className="swiper-button-next" />
        </div>
      </>
    );
  }
}

export default CoverFlowCarousel;
