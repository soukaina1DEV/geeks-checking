import React, { useState } from "react";

function Forms() {
  const [inputs, setInputs] = useState({ username: "", age: "" });
  const [errormessage, setErrormessage] = useState("");
  const [message, setMessage] = useState(
    "The content of a textarea goes in the value attribute"
  );
  const [car, setCar] = useState("Volvo");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "age") {
      if (!Number(value)) {
        setErrormessage("Your age must be a number");
      } else {
        setErrormessage("");
      }
    }
    setInputs({ ...inputs, [name]: value });
  };

  const mySubmitHandler = (e) => {
    e.preventDefault();
    if (inputs.age && !Number(inputs.age)) {
      alert("Your age must be a number");
    } else {
      alert(`You are submitting ${inputs.username}`);
    }
  };

  let header;
  if (inputs.username) {
    header = (
      <h1>
        Hello {inputs.username} {inputs.age}
      </h1>
    );
  } else {
    header = <h1>Hello</h1>;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      {header}

      <form onSubmit={mySubmitHandler}>
        <div style={{ marginBottom: "15px" }}>
          <label>Enter your name:</label>
          <br />
          <input
            type="text"
            name="username"
            value={inputs.username}
            onChange={handleChange}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Enter your age:</label>
          <br />
          <input
            type="text"
            name="age"
            value={inputs.age}
            onChange={handleChange}
          />
          <span style={{ color: "red", marginLeft: "10px" }}>
            {errormessage}
          </span>
        </div>

        <input type="submit" value="Submit" />
      </form>

      <br />
      <hr />

      <div style={{ marginTop: "30px" }}>
        <h3>Textarea Example:</h3>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="4"
          cols="40"
        />
        <p>{message}</p>
      </div>

      <hr />

      <div style={{ marginTop: "30px" }}>
        <h3>Select Example:</h3>
        <select value={car} onChange={(e) => setCar(e.target.value)}>
          <option value="Volvo">Volvo</option>
          <option value="Ford">Ford</option>
          <option value="Fiat">Fiat</option>
        </select>
        <p>My favorite car is: {car}</p>
      </div>
    </div>
  );
}

export default Forms;
