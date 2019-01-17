import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked: ${count} time${count > 1 ? "s" : ""}.`;
  });

  return (
    <div>
      <button
        onClick={() => {
          setCount(prevCount => prevCount + 1);
        }}
      >
        Click Me
      </button>
      <p>Clicked: {count}</p>
    </div>
  );
};

export default Counter;
