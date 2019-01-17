import React, { useState, useEffect } from "react";

const LightSwitch = () => {
  const [isOn, toggleLight] = useState(false);

  useEffect(() => {
    document.title = `Light is ${isOn ? "on" : "off"}.`;
  });

  return (
    <button
      style={{
        background: isOn ? "yellow" : "white"
      }}
      onClick={() => toggleLight(prevIsOn => !prevIsOn)}
    >
      Click Me
    </button>
  );
};

export default LightSwitch;
