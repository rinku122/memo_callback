import React from "react";

const SalaryButton = ({ incrementSalary }) => {
  console.log("Render SalaryButton");

  return (
    <div>
      <button
        onClick={incrementSalary}
        style={{ width: "100px", height: "20px" }}
      >
        {" "}
        SalaryButton
      </button>
    </div>
  );
};

export default React.memo(SalaryButton);
