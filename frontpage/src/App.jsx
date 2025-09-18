import React from "react";
import { Routes, Route } from "react-router-dom";
import Threads from "./components/Threads";
import TextOverlay from "./components/TextOverlay";
import ButtonOverlay from "./components/ButtonOverlay";
import SecondPage from "./SecondPage";


const HomePage = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "black",
        position: "relative",
      }}
    >
      {/* Background animation */}
      <Threads amplitude={1} distance={0} enableMouseInteraction={true} />

    
      {/* Text overlay */}
      <TextOverlay />

      {/* Button overlay */}
      <ButtonOverlay />
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/second" element={<SecondPage />} />
    </Routes>
  );
};

export default App;
