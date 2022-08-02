import React, { component } from "react";

const info = {
  color: "#e7144c",
  fontWeight: "bold",
};

const Message = () => {
  return (
    <div>
      <p>
        <span style={info}>Underweight:</span> BMI is less than or equal to 18.5
      </p>
      <p>
        <span style={info}>Normal weight:</span> BMI is between 18.5 - 24.9
      </p>
      <p>
        <span style={info}>Overweight:</span> BMI is between 25 - 29.9
      </p>
      <p>
        <span style={info}>Obesity:</span> BMI of 30 or greater
      </p>
    </div>
  );
};

export default Message;
