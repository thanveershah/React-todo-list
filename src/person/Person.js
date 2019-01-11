import React, { Component } from "react";
import "./Person.css";

class Person extends Component {
  state = {
    inputValue: "", //input value
    inputArray: [] // Array to store the value of input
  };

  updateInput = e => {
    this.setState({
      inputValue: e.target.value //watching the keystroke of input
    });
    // console.log(this.state.inputValue);
  };

  //Adding Items on Click
  addItem = () => {
    let newValue = this.state.inputValue;
    let newArray = this.state.inputArray;

    if (newArray.includes(newValue)) {
      console.log("Exist"); // Item exist => check console
      return false;
    } else {
      newArray.push(newValue); //Pushing the typed value into an array
      this.setState({
        inputArray: newArray //Storing the new array into the real array
      });
    }

    console.log(this.state.inputArray);
  };

  deletItem = key => {
    let newArray = this.state.inputArray;
    newArray.splice(key, 1);
    this.setState({
      inputArray: newArray
    });
    console.log(key);
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
          {/* Using map function to loop through the array and displaying them in the li tag */}
          {this.state.inputArray.map((value, key) => {
            return (
              <li className="list-group-item items" key={key}>
                <span className="float-left">{value}</span>
                <button
                  className="btn btn-danger float-right"
                  onClick={() => this.deletItem(key)}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Person;
