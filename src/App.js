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
    const { num1, num2, operator } = this.state;
    const { value } = e.target;

    if (value === "=") {
      if (operator === "+" && num2 !== "" && num2 !== "(") {
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
      } else if (operator === "-" && num2 !== "" && num2 !== "(") {
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
      } else if (operator === "*" && num2 !== "" && num2 !== "(") {
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
        num2 !== "0" &&
        num2 !== "(" &&
        num2 !== "0." &&
        num2 !== "(0.)"
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
      } else if (num2 === "" && num1 !== "") {
        alert("Please enter second number");
      } else if (num1 === "") {
        alert("Please enter the numbers");
      } else if (!this.NotZero(num2)) {
        alert("Cannot divide by zero");
        this.setState({
          result: 0,
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
      if (num1 !== "(-" && num1 !== "") {
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
    } else {
      if (
        operator === "" &&
        value !== "." &&
        num1.length < 15 &&
        num1.endsWith(")") === false
      ) {
        console.log("passed last else - {if}");
        this.setState({ num1: this.state.num1 + value });
      } else if (
        operator !== "" &&
        value !== "." &&
        num2.length < 15 &&
        num2.endsWith(")") === false
      ) {
        console.log("passed last else - {else if}");
        console.log(num2, typeof num2);
        this.setState({ num2: this.state.num2 + value });
      }
    }
  };

  ConvertToNegative = () => {
    const { num1, num2, operator } = this.state;

    if (num1 !== "(-" && operator === "") {
      console.log("first General Negative Case");
      if (
        this.state.num1 === "" &&
        this.state.operator === "" &&
        this.state.parenthesis === false
      ) {
        console.log("first Negative");
        this.setState({
          num1: "(-" + this.state.num1,
          parenthesis: true,
          dot: false,
        });
      } else if (num1 === "(") {
        this.setState({
          num1: this.state.num1 + "-",
          parenthesis: true,
          dot: false,
        });
      }
    } else if (num2 !== "(-" && operator !== "") {
      console.log("second stage Negative General");
      if (
        this.state.num2 === "" &&
        this.state.operator !== "" &&
        this.state.parenthesis === false
      ) {
        console.log("second Negative");
        this.setState({
          num2: "(-" + this.state.num2,
          parenthesis: true,
          dot: false,
        });
      } else if (num2 === "(") {
        this.setState({
          num2: this.state.num2 + "-",
          parenthesis: true,
          dot: false,
        });
      }
    } else if (num1 === "(-" && operator === "") {
      console.log("First removing Negative");
      this.setState({
        num1: "",
        parenthesis: false,
        dot: false,
      });
    } else if (num2 === "(-" && operator !== "") {
      console.log("Second removing Negative");
      this.setState({
        num2: "",
        dot: false,
      });
    }
  };

  PutParenthesis = () => {
    const { num1, num2, operator, parenthesis } = this.state;

    if (num1 === "" && operator === "") {
      console.log("first stage");
      this.setState({
        num1: "(",
        dot: false,
        parenthesis: true,
      });
    } else if (num2 === "" && operator !== "") {
      console.log("second stage");
      this.setState({
        num2: "(",
        dot: false,
        parenthesis: true,
      });
    } else if (num1 === "(" && operator === "") {
      console.log("third stage");
      this.setState({
        num1: "",
        dot: false,
        parenthesis: false,
      });
    } else if (num2 === "(" && operator !== "") {
      console.log("fourth stage");
      this.setState({
        num2: "",
        dot: false,
        parenthesis: false,
      });
    } else if (
      num1 !== "" &&
      num1 !== "(" &&
      num1 !== "(-" &&
      operator === "" &&
      parenthesis === false
    ) {
      console.log("fifth stage");
      this.setState({
        num1: this.state.num1 + "",
        num2: "(",
        operator: "*",
        dot: false,
        // parenthesis: false,
      });
    } else if (
      num1 !== "" &&
      operator === "" &&
      parenthesis === true &&
      num1 !== "(-"
    ) {
      console.log("sixth stage");
      this.setState({
        num1: this.state.num1 + ")",
        parenthesis: false,
      });
    } else if (
      num2 !== "" &&
      operator !== "" &&
      // parenthesis === true &&
      num2 !== "(-" &&
      num2.endsWith(")") === false
    ) {
      console.log("General closing parenthesis num2");
      if (num1.startsWith("(")) {
        console.log("first closing num2");
        this.setState({
          num2: this.state.num2 + ")",
          parenthesis: false,
        });
      } else if (num2.startsWith("(") && num2.endsWith(")") === false) {
        console.log("second closing parenthesis num2");
        this.setState({
          num2: this.state.num2 + ")",
          parenthesis: true,
        });
      }
    } else if (
      num1.includes("(") === true &&
      num1.includes(")") === false &&
      num1 !== "(-" &&
      parenthesis === false &&
      num2.endsWith(")") === false
    ) {
      console.log("Second closing parenthesis all");
      this.setState({
        num2: this.state.num2 + ")",
        parenthesis: true,
      });
    }
  };

  PutDot = () => {
    const { num1, num2, operator, dot } = this.state;

    if (
      num1 === "" ||
      num1 === "(-" ||
      (num2 === "" && operator !== "") ||
      num2 === "(-" ||
      num1 === "(" ||
      num2 === "("
    ) {
      console.log("First General dot");
      if (operator === "" && dot === false) {
        console.log("first num1 dot");
        this.setState({
          num1: num1 + "0.",
          dot: true,
        });
      } else if (operator !== "" && dot === false) {
        console.log("second num2 dot");
        this.setState({
          num2: num2 + "0.",
          dot: true,
        });
      }
    } else if (num1.endsWith(")") && !num2.startsWith("(") && dot === false) {
      console.log("last stage parenthesis dot");
      if (num2 === "" || num2 === "(-" || num2 === "(") {
        this.setState({
          num1: this.state.num1 + "",
          operator: "*",
          num2: "0.",
          dot: true,
        });
      } else if (operator !== "" && dot === false) {
        this.setState({
          num2: num2 + ".",
          dot: true,
        });
      }
    } else {
      if (operator === "" && dot === false) {
        this.setState({
          num1: num1 + ".",
          dot: true,
        });
      } else if (operator !== "" && dot === false) {
        this.setState({
          num2: num2 + ".",
          dot: true,
        });
      }
    }
  };

  NotZero = (num2) => {
    num2 = +num2; // Coerce to number.
    if (!num2) {
      // Matches +0, -0, NaN
      return false;
    } else if (num2 === "0.") {
      return false;
    } else if (num2 === "(0.)") {
      return false;
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
          PutDot={this.PutDot}
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

// else if (value === "." && this.state.dot === false && num1 !== "") {
//   if (operator === "") {
//     console.log("passed dot first {if}");
//     this.setState({
//       num1: this.state.num1 + value,
//       dot: true,
//     });
//   } else if (operator !== "" && num2 !== "") {
//     console.log("passed dot second {if}");
//     this.setState({
//       num2: this.state.num2 + value,
//       dot: true,
//     });
//   }

// if (num1 !== "" && parenthesis === false && operator === "") {
//   console.log("passed parenthesis num1");
//   this.setState({
//     num1: "(" + num1 + ")",
//     parenthesis: true,
//   });
// } else if (num2 !== "" && parenthesis === false && operator !== "") {
//   console.log("passed parenthesis num2");
//   this.setState({
//     num2: "(" + num2 + ")",
//     parenthesis: true,
//   });
// }
