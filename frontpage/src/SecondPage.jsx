import React from "react";
import Stepper from "./components/Stepper"; // ✅ make sure path is correct

const SecondPage = () => {
  const handleComplete = async (formData) => {
    try {
      const response = await fetch("http://localhost:5000/save-data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.ok) {
        alert("✅ Data saved to backend JSON file!");
      } else {
        alert("❌ Failed to save data");
      }
    } catch (error) {
      console.error("Error saving data:", error);
      alert("❌ Error saving data");
    }
  };

  return (
    <div style={{ padding: "2em", background: "black", minHeight: "100vh" }}>
      {/* <h1 style={{ color: "white" }}>Stepper with Backend Save</h1> */}
      <Stepper onComplete={handleComplete} />
    </div>
  );
};

export default SecondPage;

