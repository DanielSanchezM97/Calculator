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
      if (
        operator === "+" &&
        num2 !== "" &&
        num1 !== "-" &&
        num2 !== "-" &&
        num1 !== "-." &&
        num2 !== "-."
      ) {
        this.setState({
          result:
            (
              parseFloat(num1.replace(/\(|\)/g, "")) +
              parseFloat(num2.replace(/\(|\)/g, ""))
            ).toFixed(10) * 1,
          operator: "",
          num1: "",
          num2: "",
          dot: false,
          parenthesis: false,
        });
      } else if (
        operator === "-" &&
        num2 !== "" &&
        num1 !== "-" &&
        num2 !== "-" &&
        num1 !== "-." &&
        num2 !== "-."
      ) {
        this.setState({
          result:
            (
              parseFloat(num1.replace(/\(|\)/g, "")) -
              parseFloat(num2.replace(/\(|\)/g, ""))
            ).toFixed(5) + "",
          operator: "",
          num1: "",
          num2: "",
          dot: false,
          parenthesis: false,
        });
      } else if (
        operator === "*" &&
        num2 !== "" &&
        num1 !== "-" &&
        num2 !== "-" &&
        num1 !== "-." &&
        num2 !== "-."
      ) {
        this.setState({
          result:
            (
              parseFloat(num1.replace(/\(|\)/g, "")) *
              parseFloat(num2.replace(/\(|\)/g, ""))
            ).toFixed(5) + "",
          operator: "",
          num1: "",
          num2: "",
          dot: false,
          parenthesis: false,
        });
      } else if (
        operator === "/" &&
        num2 !== "" &&
        num1 !== "-" &&
        num2 !== "-" &&
        num1 !== "-." &&
        num2 !== "-."
      ) {
        this.setState({
          result:
            (
              parseFloat(num1.replace(/\(|\)/g, "")) /
              parseFloat(num2.replace(/\(|\)/g, ""))
            ).toFixed(5) + "",
          operator: "",
          num1: "",
          num2: "",
          dot: false,
          parenthesis: false,
        });
      } else {
        alert("Please enter a valid expression");
        this.setState({
          result: 0,
          operator: "",
          num1: "",
          num2: "",
          dot: false,
          parenthesis: false,
        });
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
      if (num1 !== "-" && num1 !== "-." && num1 !== "") {
        console.log("passed operators");
        console.log(num1, typeof num1);
        console.log(num2, typeof num2);
        this.setState({
          operator: value,
          num1: this.state.num1 + "",
          // num2: "",
          dot: false,
          parenthesis: false,
        });
      }
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
        console.log(num2, typeof num2);
        this.setState({ num2: this.state.num2 + value });
      }
    }
  };

  ConvertToNegative = () => {
    if (
      this.state.num1 === "" &&
      this.state.operator === "" &&
      this.state.parenthesis === false
    ) {
      this.setState({
        num1: "-" + this.state.num1,
        dot: false,
      });
    } else if (
      this.state.num2 === "" &&
      this.state.operator !== "" &&
      this.state.parenthesis === false
    ) {
      this.setState({
        num2: "-" + this.state.num2,
        dot: false,
      });
    }
  };

  PutParenthesis = () => {
    const { num1, num2, operator, parenthesis } = this.state;

    if (
      num1 !== "" &&
      parenthesis === false &&
      operator === "" &&
      num1 !== "-" &&
      num1 !== "-."
    ) {
      console.log("passed parenthesis num1");
      this.setState({
        num1: "(" + num1 + ")",
        parenthesis: true,
      });
    } else if (
      num2 !== "" &&
      parenthesis === false &&
      operator !== "" &&
      num2 !== "-" &&
      num2 !== "-."
    ) {
      console.log("passed parenthesis num2");
      this.setState({
        num2: "(" + num2 + ")",
        parenthesis: true,
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

// else if (parenthesis === false) {
//   if (operator === "+" && num2 !== "") {
//     this.setState({
//       result: parseFloat(num1) + parseFloat(num2),
//       operator: "",
//       num1: "",
//       num2: "",
//       dot: false,
//       parenthesis: false,
//     });
//   } else if (operator === "-" && num2 !== "") {
//     this.setState({
//       result: parseFloat(num1) - parseFloat(num2),
//       operator: "",
//       num1: "",
//       num2: "",
//       dot: false,
//       parenthesis: false,
//     });
//   } else if (operator === "*" && num2 !== "") {
//     this.setState({
//       result: parseFloat(num1) * parseFloat(num2),
//       operator: "",
//       num1: "",
//       num2: "",
//       dot: false,
//       parenthesis: false,
//     });
//   } else if (operator === "/" && num2 !== "") {
//     this.setState({
//       result: parseFloat(num1) / parseFloat(num2),
//       operator: "",
//       num1: "",
//       num2: "",
//       dot: false,
//       parenthesis: false,
//     });
//   }
// }
