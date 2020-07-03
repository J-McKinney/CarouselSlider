import React from "react";
import CoverFlowCarousel from "./CoverFlowCarousel/CoverFlowCarousel";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <CoverFlowCarousel />
    </div>
  );
}

export default App;
