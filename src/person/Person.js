import React, { Component } from "react";
import "./Person.css";

class Person extends Component {
  state = {
    inputValue: "",
    inputArray: []
  };

  updateInput = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  addItem = () => {
    let newValue = this.state.inputValue;
    let newArray = this.state.inputArray;

    if (newArray === newValue) {
      console.log("Exist");
    } else {
      newArray.push(newValue);
    }
    this.setState({
      inputArray: newArray
    });
    console.log(this.state.inputArray);
  };

  render() {
    return (
      <div className="container">
        <hr />
        <div className="form-inline">
          <input
            type="text"
            className="form-control mr-2"
            value={this.state.inputValue}
            onChange={e => this.updateInput(e)}
          />

          <button className="btn btn-primary" onClick={this.addItem}>
            Add
          </button>
        </div>
        <br />

        <ul className="list-group col-3">
          {this.state.inputArray.map((value, key) => {
            return (
              <li className="list-group-item items" key={key}>
                <span className="float-left">{value}</span>
                <button className="btn btn-danger float-right">X</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Person;
