import React, { Component } from "react";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email } = this.state;

    console.log("User name :", name);
    console.log("User Email :", email);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email }),
        }
      );

      const data = await response.json();
      console.log("Response:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  render() {
    return (
      <div style={{ margin: "40px" }}>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="User name"
            onChange={this.handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="User email"
            onChange={this.handleChange}
          />
          <button type="submit">Add user</button>
        </form>
      </div>
    );
  }
}

export default UserForm;
