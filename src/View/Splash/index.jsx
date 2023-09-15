import React from "react";
import "../../../src/Style/Splash.css";
import FadeLoader from "react-spinners/FadeLoader";

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <div className="splash-card">
        <h1 className="splash-text">
          <div className="splash-content">
            <FadeLoader size={150} color="white" /> 
          </div>
          <span>Please wait</span>
        </h1>
      </div>
    </div>
  );
};

export default SplashScreen;
