import React from "react";

const TextOverlay = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "30%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "white",
        fontSize: "2rem",
        zIndex: 10,
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontWeight: "bold",
          fontSize: "2.5rem",
          margin: 0,
          transition: "all 0.4s ease",
        }}
        onMouseOver={(e) => {
          e.target.style.textShadow =
            "0 0 20px rgba(192,192,192,1), 0 0 40px rgba(192,192,192,0.9), 0 0 60px rgba(192,192,192,0.8)";
        }}
        onMouseOut={(e) => {
          e.target.style.textShadow = "none";
        }}
      >
        Welcome,
      </p>
      <p
        style={{
          margin: "10px 0 0 0",
          transition: "all 0.4s ease",
        }}
        onMouseOver={(e) => {
          e.target.style.textShadow =
            "0 0 15px rgba(192,192,192,1), 0 0 30px rgba(192,192,192,0.8), 0 0 45px rgba(192,192,192,0.7)";
        }}
        onMouseOut={(e) => {
          e.target.style.textShadow = "none";
        }}
      >
        to the AI internship finder
      </p>
    </div>
  );
};

export default TextOverlay;
