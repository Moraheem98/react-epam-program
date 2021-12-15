import React, { useState } from "react";

import { Button } from "../Button";

export function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>Count:{count}</h1>
      <Button icon={"-"} action={decrementCount} />
      <Button icon={"+"} action={incrementCount} />
    </>
  );
};