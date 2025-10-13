import React from "react";
import "../Form.css";

function FormComponent(props) {
  const { data, handleChange, handleSubmit } = props;

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <h2>Sample form</h2>

        <input
          type="text"
          name="firstName"
          value={data.firstName}
          placeholder="First Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          value={data.lastName}
          placeholder="Last Name"
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          value={data.age}
          placeholder="Age"
          onChange={handleChange}
        />

        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={data.gender === "male"}
            onChange={handleChange}
          />{" "}
          Male
        </label>

        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={data.gender === "female"}
            onChange={handleChange}
          />{" "}
          Female
        </label>

        <br />

        <label>
          Select your destination
          <select
            name="destination"
            value={data.destination}
            onChange={handleChange}
          >
            <option value="">-- Please Choose a destination --</option>
            <option value="Japan">Japan</option>
            <option value="USA">USA</option>
            <option value="France">France</option>
            <option value="Morocco">Morocco</option>
          </select>
        </label>

        <br />

        <label>
          <strong>Dietary restrictions:</strong>
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="nutsFree"
            checked={data.nutsFree}
            onChange={handleChange}
          />
          Nuts free
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="lactoseFree"
            checked={data.lactoseFree}
            onChange={handleChange}
          />
          Lactose free
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="vegan"
            checked={data.vegan}
            onChange={handleChange}
          />
          Vegan
        </label>

        <br />
        <button type="submit">Submit</button>
      </form>

      <div className="info">
        <h3>Entered information:</h3>
        <p>
          <em>Your name:</em> {data.firstName} {data.lastName}
        </p>
        <p>
          <em>Your age:</em> {data.age}
        </p>
        <p>
          <em>Your gender:</em> {data.gender}
        </p>
        <p>
          <em>Your destination:</em> {data.destination}
        </p>
        <p>
          <em>Your dietary restrictions:</em>
        </p>
        <p>**Nuts free: {data.nutsFree ? "Yes" : "No"}</p>
        <p>**Lactose free: {data.lactoseFree ? "Yes" : "No"}</p>
        <p>**Vegan meal: {data.vegan ? "Yes" : "No"}</p>
      </div>
    </div>
  );
}

export default FormComponent;
