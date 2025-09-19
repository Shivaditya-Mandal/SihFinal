import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Threads from "./components/Threads";
import TextOverlay from "./components/TextOverlay";
import ButtonOverlay from "./components/ButtonOverlay";
import SecondPage from "./SecondPage";
import Navbar from "./components/Navbar"; // ✅ Navbar

const HomePage = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    setFadeOut(true); // trigger fade-out
    setTimeout(() => {
      navigate("/second"); // navigate after animation
    }, 800); // match fade-out duration
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "rgb(6, 15, 49)",
        position: "relative",
        transition: "opacity 0.8s ease", // ✅ fade animation
        opacity: fadeOut ? 0 : 1, // ✅ fade out when clicked
      }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Background animation */}
      <Threads
        amplitude={3}
        distance={0.5}
        enableMouseInteraction={true}
      />

      {/* Text overlay */}
      <TextOverlay />

      {/* Button overlay with fade-out trigger */}
      <ButtonOverlay onClick={handleGetStarted} />
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/second" element={<SecondPage />} />
      <Route
        path="/criteria"
        element={<div style={{ color: "white" }}>Criteria Page</div>}
      />
      <Route
        path="/companies"
        element={<div style={{ color: "white" }}>Companies Page</div>}
      />
    </Routes>
  );
};

export default App;
