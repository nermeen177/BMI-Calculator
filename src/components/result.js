import React, { component } from "react";
const Result = (props) => {
  return (
    <div>
      <h3>
        Your BMI Is: <span style={{ color: "#e7144c" }}>{props.bmi}</span>
      </h3>
    </div>
  );
};

export default Result;
