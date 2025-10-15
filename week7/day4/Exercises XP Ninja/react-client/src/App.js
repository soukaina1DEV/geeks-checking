import React, { Component } from "react";

class App extends Component {
  state = { users: [] };

  componentDidMount() {
    fetch("/users")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ users: data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { users } = this.state;
    return (
      <div
        style={{
          margin: "50px auto",
          padding: "20px",
          width: "200px",
          textAlign: "center",
          border: "1px solid #ddd",
          borderRadius: "10px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <h3>Users</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {users.map((user) => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
