import React from "react";
import Counter from "./Counter";
import LightSwitch from "./LightSwitch";
import MousePosition from "./MousePosition";
import NetworkStatus from "./NetworkStatus";

const Demo = () => {
  return (
    <>
      <p>Network Status:</p>
      <NetworkStatus />
      <hr />
      <p>Counter:</p>
      <Counter />
      <hr />
      <p>Light Switch:</p>
      <LightSwitch />
      <hr />
      <p>Mouse Position:</p>
      <MousePosition />
    </>
  );
};

export default Demo;
