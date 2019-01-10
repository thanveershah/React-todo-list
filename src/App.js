import React, { Component } from "react";
import "./App.css";
import Person from "./person/Person";

class App extends Component {
  state = {
    counter: 1
  };

  render() {
    return (
      <div className="container">
        <Person />
      </div>
    );
  }
}

export default App;
