import React, { useState } from "react";
import "./Stepper.css";

export default function Stepper({ onComplete }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
  });

  const totalSteps = 5;

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="stepper-container">
      {/* Progress bar with circles */}
      <div className="step-indicators">
        {[...Array(totalSteps)].map((_, i) => {
          const stepNum = i + 1;
          return (
            <div key={stepNum} className="step-wrapper">
              <div
                className={`step-circle ${
                  currentStep === stepNum
                    ? "active"
                    : currentStep > stepNum
                    ? "completed"
                    : ""
                }`}
              >
                {stepNum}
              </div>
              {stepNum < totalSteps && (
                <div
                  className={`step-line ${
                    currentStep > stepNum ? "filled" : ""
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Step content */}
      <div className="step-content">
        {currentStep === 1 && (
          <input
            type="text"
            placeholder="paid/unpaid"
            value={formData.input1}
            onChange={(e) =>
              setFormData({ ...formData, input1: e.target.value })
            }
          />
        )}
        {currentStep === 2 && (
          <input
            type="text"
            placeholder="Skillset"
            value={formData.input2}
            onChange={(e) =>
              setFormData({ ...formData, input2: e.target.value })
            }
          />
        )}
        {currentStep === 3 && (
          <input
            type="text"
            placeholder="brief explanation of your projects"
            value={formData.input3}
            onChange={(e) =>
              setFormData({ ...formData, input3: e.target.value })
            }
          />
        )}
        {currentStep === 4 && (
          <input
            type="text"
            placeholder="job description"
            value={formData.input4}
            onChange={(e) =>
              setFormData({ ...formData, input4: e.target.value })
            }
          />
        )}
        {currentStep === 5 && (
          <input
            type="text"
            placeholder="mode of internship"
            value={formData.input5}
            onChange={(e) =>
              setFormData({ ...formData, input5: e.target.value })
            }
          />
        )}
      </div>

      {/* Navigation buttons */}
      <div className="stepper-footer">
        <button
          className="step-btn back"
          onClick={prevStep}
          disabled={currentStep === 1}
        >
          Previous
        </button>

        <button
          className="step-btn next"
          onClick={() => {
            if (currentStep === totalSteps) {
              if (onComplete) onComplete(formData); // ✅ send data to SecondPage
              console.log("Form Submitted ✅", formData);
            } else {
              setCurrentStep(currentStep + 1);
            }
          }}
        >
          {currentStep === totalSteps ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
}
