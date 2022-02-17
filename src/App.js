import "./css/calculator.css";
import Calculator from "./components/CalculatorBox";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      num1: "",
      num2: "",
      operator: "",
      dot: false,
      parenthesis: false,
    };
  }

  handleClick = (e) => {
    const { num1, num2, operator, parenthesis } = this.state;
    const { value } = e.target;

    if (value === "=") {
      if (parenthesis === true) {
        console.log("Parenthesis Error");
        console.log(num1, typeof num1);
        if (operator === "+" && num2 !== "") {
          this.setState({
            result:
              parseFloat(num1.replace(/\(|\)/g, "")) +
              parseFloat(num2.replace(/\(|\)/g, "")),
            operator: "",
            num1: "",
            num2: "",
            dot: false,
            parenthesis: false,
          });
        } else if (operator === "-" && num2 !== "") {
          this.setState({
            result:
              parseFloat(num1.replace(/\(|\)/g, "")) -
              parseFloat(num2.replace(/\(|\)/g, "")),
            operator: "",
            num1: "",
            num2: "",
            dot: false,
            parenthesis: false,
          });
        } else if (operator === "*" && num2 !== "") {
          this.setState({
            result:
              parseFloat(num1.replace(/\(|\)/g, "")) *
              parseFloat(num2.replace(/\(|\)/g, "")),
            operator: "",
            num1: "",
            num2: "",
            dot: false,
            parenthesis: false,
          });
        } else if (operator === "/" && num2 !== "") {
          this.setState({
            result:
              parseFloat(num1.replace(/\(|\)/g, "")) /
              parseFloat(num2.replace(/\(|\)/g, "")),
            operator: "",
            num1: "",
            num2: "",
            dot: false,
            parenthesis: false,
          });
        }
      } else if (parenthesis === false) {
        console.log("No Parenthesis Error");
        if (operator === "+" && num2 !== "") {
          this.setState({
            result: parseFloat(num1) + parseFloat(num2),
            operator: "",
            num1: "",
            num2: "",
            dot: false,
          });
        } else if (operator === "-" && num2 !== "") {
          this.setState({
            result: parseFloat(num1) - parseFloat(num2),
            operator: "",
            num1: "",
            num2: "",
            dot: false,
          });
        } else if (operator === "*" && num2 !== "") {
          this.setState({
            result: parseFloat(num1) * parseFloat(num2),
            operator: "",
            num1: "",
            num2: "",
            dot: false,
          });
        } else if (operator === "/" && num2 !== "") {
          this.setState({
            result: parseFloat(num1) / parseFloat(num2),
            operator: "",
            num1: "",
            num2: "",
            dot: false,
          });
        }
      }
    } else if (value === "C") {
      this.setState({
        result: 0,
        num1: "",
        num2: "",
        operator: "",
        dot: false,
        parenthesis: false,
      });
    } else if (
      value === "+" ||
      value === "-" ||
      value === "*" ||
      value === "/"
    ) {
      console.log("passed operators");
      console.log(num1, typeof num1);
      this.setState({
        operator: value,
        num1: this.state.num1 + "",
        // num2: "",
        dot: false,
        parenthesis: false,
      });
    } else if (value === "." && this.state.dot === false && num1 !== "") {
      if (operator === "") {
        console.log("passed dot first {if}");
        this.setState({
          num1: this.state.num1 + value,
          dot: true,
        });
      } else if (operator !== "" && num2 !== "") {
        console.log("passed dot second {if}");
        this.setState({
          num2: this.state.num2 + value,
          dot: true,
        });
      }
    } else {
      if (
        operator === "" &&
        value !== "." &&
        parenthesis === false &&
        num1.length < 15
      ) {
        console.log("passed last else - {if}");
        this.setState({ num1: this.state.num1 + value });
      } else if (
        operator !== "" &&
        value !== "." &&
        parenthesis === false &&
        num2.length < 15
      ) {
        console.log("passed last else - {else if}");
        this.setState({ num2: this.state.num2 + value });
      }
    }
  };

  ConvertToNegative = () => {
    if (
      this.state.num1 !== "" &&
      this.state.operator === "" &&
      this.state.parenthesis === false
    ) {
      this.setState({
        num1: parseFloat(this.state.num1) * -1,
        dot: false,
      });
    } else if (
      this.state.num2 !== "" &&
      this.state.operator !== "" &&
      this.state.parenthesis === false
    ) {
      this.setState({
        num2: parseFloat(this.state.num2) * -1,
        dot: false,
      });
    }
  };

  PutParenthesis = () => {
    if (
      this.state.num1 !== "" &&
      this.state.parenthesis === false &&
      this.state.operator === ""
    ) {
      console.log("passed parenthesis num1");
      this.setState({
        num1: "(" + this.state.num1 + ")",
        parenthesis: true,
      });
    } else if (
      this.state.num2 !== "" &&
      this.state.parenthesis === false &&
      this.state.operator !== ""
    ) {
      console.log("passed parenthesis num2");
      this.setState({
        num2: "(" + this.state.num2 + ")",
        parenthesis: true,
      });
    }
  };

  ConvertToString = () => {
    if (
      this.state.num1 !== "" &&
      this.state.operator === "" &&
      this.state.parenthesis === false
    ) {
      console.log("passed Convert num1 to string");
      this.setState({
        num1: this.state.num1.toString(),
        dot: false,
      });
    } else if (
      this.state.num2 !== "" &&
      this.state.operator !== "" &&
      this.state.parenthesis === false
    ) {
      console.log("passed Convert num2 to string");
      this.setState({
        num2: this.state.num2.toString(),
        dot: false,
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Calculator
          TooLong={this.TooLong}
          handleClick={this.handleClick}
          ConvertToNegative={this.ConvertToNegative}
          PutParenthesis={this.PutParenthesis}
          result={this.state.result}
          num1={this.state.num1}
          num2={this.state.num2}
          operator={this.state.operator}
          dot={this.state.dot}
        />
      </div>
    );
  }
}

export default App;

// let num1 = -92;
// let num2 = "(-96)";

// num2 = num2.replace(/[\(\)]/g, "");

// console.log(num1 + parseInt(num2));
