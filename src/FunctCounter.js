import { useState } from "react";

const FunctCounter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>Counter{count}</h1>
      <button onClick={handleClick}>Increase</button>
      <button onClick={handleDecrement}>Decrease</button>
    </>
  );
};

export default FunctCounter;
