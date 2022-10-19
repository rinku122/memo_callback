import React from "react";

const ComponentTitle = () => {
  console.log("Use Callback");
  return <div>UseCallback</div>;
};

export default React.memo(ComponentTitle);
