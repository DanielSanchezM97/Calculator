import { Component } from "react";

export default class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        <div className="calculator-display">
          <div className="calculator-state">
            {this.props.num1}
            {this.props.operator}
            {this.props.num2}
          </div>
        </div>
        <div className="calculator-result">
          <h2 className="result_text">Result = </h2>
          {this.props.result !== 0 ? this.props.result : "0"}
        </div>

        <div className="calculator-keypad">
          <div className="calculator-keypad-row">
            <button
              className="calculator-keypad-button"
              value="1"
              onClick={this.props.handleClick}
            >
              1
            </button>
            <button
              className="calculator-keypad-button"
              value="2"
              onClick={this.props.handleClick}
            >
              2
            </button>
            <button
              className="calculator-keypad-button"
              value="3"
              onClick={this.props.handleClick}
            >
              3
            </button>
            <button
              className="calculator-keypad-operator"
              value="+"
              onClick={this.props.num1 !== "" ? this.props.handleClick : null}
            >
              +
            </button>
          </div>
          <div className="calculator-keypad-row">
            <button
              className="calculator-keypad-button"
              value="4"
              onClick={this.props.handleClick}
            >
              4
            </button>
            <button
              className="calculator-keypad-button"
              value="5"
              onClick={this.props.handleClick}
            >
              5
            </button>
            <button
              className="calculator-keypad-button"
              value="6"
              onClick={this.props.handleClick}
            >
              6
            </button>
            <button
              className="calculator-keypad-operator"
              value="-"
              onClick={this.props.num1 !== "" ? this.props.handleClick : null}
            >
              -
            </button>
          </div>
          <div className="calculator-keypad-row">
            <button
              className="calculator-keypad-button"
              value="7"
              onClick={this.props.handleClick}
            >
              7
            </button>
            <button
              className="calculator-keypad-button"
              value="8"
              onClick={this.props.handleClick}
            >
              8
            </button>
            <button
              className="calculator-keypad-button"
              value="9"
              onClick={this.props.handleClick}
            >
              9
            </button>
            <button
              className="calculator-keypad-operator"
              value="*"
              onClick={this.props.num1 !== "" ? this.props.handleClick : null}
            >
              x
            </button>
          </div>
          <div className="calculator-keypad-row">
            <button
              className="calculator-keypad-button"
              value="0"
              onClick={this.props.handleClick}
            >
              0
            </button>

            {/* if num1 does not have a dot the dot works otherwise does not work */}
            <button
              className="calculator-keypad-button"
              value="."
              onClick={this.props.dot === false ? this.props.handleClick : null}
            >
              .
            </button>
            <button
              className="calculator-keypad-operator"
              value="="
              onClick={this.props.handleClick}
            >
              =
            </button>

            {/* if num1 is not empty then the operator works */}
            <button
              className="calculator-keypad-operator"
              value="/"
              onClick={this.props.num1 !== "" ? this.props.handleClick : null}
            >
              /
            </button>
          </div>
          <div className="calculator-keypad-row">
            <button
              className="calculator-keypad-operator"
              value="+/-"
              onClick={this.props.ConvertToNegative}
            >
              +/-
            </button>
            <button
              className="calculator-keypad-operator"
              value="()"
              onClick={this.props.PutParenthesis}
            >
              ( )
            </button>
          </div>
          <div className="calculator-keypad-row">
            <button
              className="calculator-keypad-operator"
              value="C"
              onClick={this.props.handleClick}
            >
              C
            </button>
          </div>
        </div>
      </div>
    );
  }
}
