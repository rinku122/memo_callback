import React from "react";

const RenderSalary = ({ salary }) => {
  console.log("Render Salary");
  return <div>RenderSalary : {salary}</div>;
};

export default React.memo(RenderSalary);
