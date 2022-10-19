import React from "react";

const RenderAge = ({ age }) => {
  console.log("Render Age");
  return <div>RenderAge : {age} </div>;
};

export default React.memo(RenderAge);
