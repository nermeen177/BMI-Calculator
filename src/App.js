import { render } from "@testing-library/react";
import "./App.css";
import Message from "./components/Message";
import Result from "./components/result";
import React, { Component } from "react";

class App extends Component {
  state = {
    weight: 0,
    height: 0,
    BMI: "__",
  };

  setWeight = (e) => {
    this.setState({
      weight: e.target.value,
    });
  };
  setHeight = (e) => {
    this.setState({
      height: e.target.value,
    });
  };
  checkValidate = () => {
    const weightValue = this.state.weight;
    const heightValue = this.state.height;
    if (
      !isNaN(+weightValue) &&
      weightValue > 0 &&
      !isNaN(+heightValue) &&
      heightValue > 0
    ) {
      return true;
    } else return false;
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.checkValidate()) {
      const weight = +this.state.weight;
      const height = +this.state.height;
      const BMIValue = (weight / (height * height)).toFixed(2);
      this.setState({
        BMI: BMIValue,
      });
      console.log(this.state.BMI);
    } else {
      alert("please ernter a valid value");
    }
  };
  render() {
    return (
      <div>
        <center>
          <h1 style={{ color: "#e7144c" }}>BMI Calculator</h1>
        </center>
        <main className="container">
          <form className="form" onSubmit={this.handleSubmit}>
            <h2 style={{ color: "#e7144c" }}>Information:-</h2>
            <br />
            <input
              type="text"
              placeholder="enter your weight in kg"
              className="inputField"
              required
              onChange={this.setWeight}
            />
            <input
              type="text"
              placeholder="enter your height in m"
              className="inputField"
              required
              onChange={this.setHeight}
            />
            <button type="submit" className="butt">
              Calculate
            </button>
          </form>
          <div>
            <br />
            <br />
            <h2 style={{ color: "#e7144c" }}>The Result:-</h2>
            <Result bmi={this.state.BMI} />
            <br />
            <hr className="hr" />
            <Message />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
