import React from "react";
import Stepper from "./components/Stepper";
import "./SecondPage.css";

const SecondPage = () => {
  return (
    <div className="second-page">
      {/* Logo */}
      <div className="second-page-logo">InternAI</div>

      {/* Stepper */}
      <div className="stepper-wrapper">
        <Stepper />
      </div>
    </div>
  );
};

export default SecondPage;
