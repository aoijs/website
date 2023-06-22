import React, { useState } from "react";

const Slash = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const slashBoxStyles = {
    display: "inline-block",
    padding: "0px 3px",
    fontWeight: "500",
    marginTop: "-5px",
    backgroundColor: isHovered ? "#4d5291" : "#3b406e",
    cursor: isHovered ? "pointer" : "default",
    color: "#c9cdfb",
    borderRadius: "3px",
    transition: "background-color 0.15s ease",
  };

  return (
    <div
      style={slashBoxStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
};

export default Slash;