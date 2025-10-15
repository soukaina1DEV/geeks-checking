import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");
  const [operation, setOperation] = useState("add");

  const calculate = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult("Please enter valid numbers!");
      return;
    }

    let res = 0;
    switch (operation) {
      case "add":
        res = n1 + n2;
        break;
      case "subtract":
        res = n1 - n2;
        break;
      case "multiply":
        res = n1 * n2;
        break;
      case "divide":
        res = n2 !== 0 ? n1 / n2 : "Cannot divide by 0";
        break;
      default:
        res = 0;
    }
    setResult(res);
  };

  return (
    <div className="calculator-container">
      <h2>Adding Two Numbers</h2>

      <div className="inputs">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="First number"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Second number"
        />
      </div>

      <div className="operation">
        <select
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value="add">Addition</option>
          <option value="subtract">Subtraction</option>
          <option value="multiply">Multiplication</option>
          <option value="divide">Division</option>
        </select>
      </div>

      <button onClick={calculate}>Add Them!</button>

      <h1>{result}</h1>
    </div>
  );
}

export default Calculator;
