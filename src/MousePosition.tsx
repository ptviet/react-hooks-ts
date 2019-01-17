import React, { useState, useEffect } from "react";

const MousePosition = () => {
  const [position, setPosition] = useState({ x: null, y: null });

  const handleMouseMove = (event: any) => {
    setPosition({ x: event.pageX, y: event.pageY });
  };

  const cleanUp = () => {
    window.removeEventListener("mousemove", handleMouseMove);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return cleanUp;
  }, []);

  return (
    <>
      <p>X Position: {position.x}</p>
      <p>Y Position: {position.y}</p>
    </>
  );
};

export default MousePosition;
