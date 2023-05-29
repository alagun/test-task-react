import React from "react";

const Button = ({ random }) => {
  return (
    <div className="section">
      <button onClick={random} className="btn" type="button">
        Random value
      </button>
    </div>
  );
};
export default Button;
