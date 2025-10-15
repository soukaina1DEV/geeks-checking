import React, { Component } from "react";
import "./Customers.css"; 

class Customers extends Component {
  constructor(props) {
    super(props);
    this.state = { customers: [] };
  }

  async componentDidMount() {
    try {
      const res = await fetch("/api/customers");
      const data = await res.json();
      this.setState({ customers: data });
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  }

  render() {
    const { customers } = this.state;
    return (
      <div className="customers-container">
        <div className="header">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="React Logo"
            width="60"
          />
          <h2>React & Express</h2>
        </div>
        <h3>Customers</h3>
        <ul>
          {customers.map((c) => (
            <li key={c.id}>
              {c.firstName} {c.lastName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Customers;
