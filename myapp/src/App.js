import logo from "./logo.svg";
import "./App.css";
import React, { useCallback, useState } from "react";
import ComponentTitle from "./ComponentTitle";
import RenderAge from "./RenderAge";
import AgeButton from "./AgeButton";
import RenderSalary from "./RenderSalary";
import SalaryButton from "./SalaryButton";

function App() {
  console.log("Parent Component");
  const [age, setAge] = useState(25);
  const [salary, setIncrementSalary] = useState(25000);

  const incremnetAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setIncrementSalary(salary + 10000);
  }, [salary]);

  return (
    <div className="App">
      <ComponentTitle />
      <RenderAge age={age} />
      <AgeButton incremnetAge={incremnetAge} />
      <RenderSalary salary={salary} />
      <SalaryButton incrementSalary={incrementSalary} />
    </div>
  );
}

export default App;
