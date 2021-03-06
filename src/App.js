import React from "react";
import CoverFlowCarousel from "./CoverFlowCarousel/CoverFlowCarousel";
// import CubeEffectCarousel from "./CubeEffectCarousel/CubeEffectCarousel";
// import FadeEffectCarousel from "./FadeEffectCarousel/FadeEffectCarousel";
// import FlipEffectCarousel from "./FlipEffectCarousel/FlipEffectCarousel";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <br />
        <CoverFlowCarousel />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

export default App;
