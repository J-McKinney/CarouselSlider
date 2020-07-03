import React from "react";
import MyCarousel from "./SwiperCarousel/MyCarousel";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />

      <MyCarousel />
    </div>
  );
}

export default App;
