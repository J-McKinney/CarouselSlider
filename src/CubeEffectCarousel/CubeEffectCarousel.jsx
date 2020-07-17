import React, { Component } from "react";
import Swiper from "swiper";
////////////CSS////////////
//swiper css must come first
import "swiper/css/swiper.min.css";
// your custom css must come second to overwrite certain stylings in swiper.css
import "./CubeEffectCarousel.css";

class CubeEffectCarousel extends Component {
  componentDidMount() {
    this.swiper = new Swiper(".swiper-container", {
      speed: 900, // controls the speed between each slide when arrow click or grabCursor
      grabCursor: true, // little hand cursor over slides
      loop: true, // allows the slides to loop from the last slide back to the first in that direction
      centeredSlides: true, // helps to center the slides
      parallax: true, // Helps focus the users attention to the slide in front/center
      autoplay: { // allows for autoplay for the slides
        delay: 3000, // a delay for each slide before it flips to the next one
        disableOnInteraction: false, // if you want to stop autoplay with a click to the slides
      },
      pagination: { // Object with navigation parameters
        el: ".swiper-pagination", // little dots under the slides for navigation
        clickable: true, // allows you to click on the little dots
      },
      navigation: { // Object with navigation parameters
        nextEl: ".swiper-button-next", // arrows on the side of the slides
        prevEl: ".swiper-button-prev", // arrows on the side of the slides
      },
      effect: "cube", // cubeEffect is the type of effect on the pictures
      cubeEffect: { // the effect that you want to use
        rotate: 30, // Slide rotate in degrees
        slideShadows: true, // Enables slides shadows
        shadow: true, // Enables main slider shadow
        shadowOffset: 20, // Main shadow offset in px
        shadowScale: 0.94, // Main shadow scale ratio
      },
    });
  }

  render() {
    return (
      <>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img
                style={{ width: "70%", height: "500px" }}
                className="d-block w-100"
                src={`images/hong-kong.jpg`}
                alt="First slide"
              />
            </div>
            <div className="swiper-slide">
              <img
                style={{ width: "70%", height: "500px" }}
                className="d-block w-100"
                src={`images/marsh.jpg`}
                alt="Second slide"
              />
            </div>
            <div className="swiper-slide">
              <img
                style={{ width: "70%", height: "500px" }}
                className="d-block w-100"
                src={`images/mountain-range.jpg`}
                alt="Third slide"
              />
            </div>
            <div className="swiper-slide">
              <img
                style={{ width: "70%", height: "500px" }}
                className="d-block w-100"
                src={`images/night-moon.jpg`}
                alt="Fourth slide"
              />
            </div>
            <div className="swiper-slide">
              <img
                style={{ width: "70%", height: "500px" }}
                className="d-block w-100"
                src={`images/paris.jpg`}
                alt="Fifth slide"
              />
            </div>
            <div className="swiper-slide">
              <img
                style={{ width: "70%", height: "500px" }}
                className="d-block w-100"
                src={`images/rocky-beach.jpg`}
                alt="Sixth slide"
              />
            </div>
          </div>
          <div className="swiper-pagination" />
          <div className="swiper-button-prev" />
          <div className="swiper-button-next" />
        </div>
        <br />
        <br />
      </>
    );
  }
}

export default CubeEffectCarousel;
