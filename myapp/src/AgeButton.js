import React from "react";

const SalaryButton = ({ incremnetAge }) => {
  console.log("Render Age button");
  return (
    <div>
      <button onClick={incremnetAge} style={{ width: "100px", height: "20px" }}>
        {" "}
        SalaryButton
      </button>
    </div>
  );
};

export default React.memo(SalaryButton);
