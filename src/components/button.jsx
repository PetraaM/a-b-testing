import React from "react";

function CTAButton() {
  const handleClick = () => {
    console.log("CTA button clicked!");
  };

  return (
    <button
      onClick={handleClick}
      style={{
        display: "block",
        margin: "20px auto", // Adjust margin as needed
        padding: "10px 20px",
        backgroundColor: "blue",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Call to Action
    </button>
  );
}

export default CTAButton;
