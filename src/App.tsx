import React, { Component } from "react";
import Login from "./Login";
import Register from "./Register";

class App extends Component {
  render() {
    return (
      <>
        <Login />
        <hr />
        <Register />
      </>
    );
  }
}

export default App;
