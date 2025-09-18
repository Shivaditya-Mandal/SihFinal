import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ import navigation hook

const ButtonOverlay = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/second"); // ✅ goes to SecondPage.jsx
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "55%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 10,
      }}
    >
      <button
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "12px 24px",
          border: "1px solid #555",
          borderRadius: "8px",
          fontSize: "1rem",
          cursor: "pointer",
          marginTop: "150px",
          boxShadow:
            "0 0 15px rgba(192,192,192,0.8), 0 0 30px rgba(192,192,192,0.7)",
          transition: "all 0.3s ease",
        }}
        onMouseOver={(e) => {
          e.target.style.boxShadow =
            "0 0 25px rgba(192,192,192,1), 0 0 50px rgba(192,192,192,0.9)";
        }}
        onMouseOut={(e) => {
          e.target.style.boxShadow =
            "0 0 15px rgba(192,192,192,0.8), 0 0 30px rgba(192,192,192,0.7)";
        }}
        onClick={handleClick} // ✅ navigate on click
      >
        Get Started
      </button>
    </div>
  );
};

export default ButtonOverlay;

