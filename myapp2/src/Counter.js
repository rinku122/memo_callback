import React, { useMemo, useState } from "react";

const Counter = () => {
  console.log("LLLLLLLLLLL");
  const [counterOne, incrementCounterOne] = useState(1);
  const [counterTwo, incrementCounterTwo] = useState(1);

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 480040000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);
  //   const isEven = () => {
  //     let i = 0;
  //     while (i < 480040000) i++;
  //     return counterOne % 2 === 0;
  //   };

  //As the counter 2 changed component is rerendered and isEven function (even if we have not changed counter 1, on first render isEven is called automaticaaly) is called as it check counter1 is odd or even.
  //Memo value from function isEven is cached and saved in memory..So every time you increment counter 2 isEven is called which is cached, so counter2 increments faster

  return (
    <div>
      <div>
        <button onClick={() => incrementCounterOne(counterOne + 1)}>
          Count One - {counterOne}{" "}
        </button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button onClick={() => incrementCounterTwo(counterTwo + 1)}>
          Count One - {counterTwo}{" "}
        </button>
      </div>
    </div>
  );
};

export default Counter;
