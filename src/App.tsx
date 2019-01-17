import React, { Component } from "react";
import Counter from "./Counter";
import LightSwitch from "./LightSwitch";
import MousePosition from "./MousePosition";
import NetworkStatus from "./NetworkStatus";

class App extends Component {
  render() {
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
  }
}

export default App;
