import React, { Component } from "react";

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoaded: false,
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      this.setState({ users: data, isLoaded: true });
    } catch (error) {
      console.error("Error fetching users:", error);
      this.setState({ isLoaded: false });
    }
  }

  render() {
    const { users, isLoaded } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    }

    return (
      <div style={{ margin: "20px", padding: "20px", borderRadius: "10px" }}>
        <h2 style={{ textAlign: "center" }}>List of users:</h2>
        {users.map((user) => (
          <div key={user.id} style={{ marginBottom: "20px" }}>
            <p>
              <strong>ID:</strong> {user.id}
            </p>
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Username:</strong> {user.username}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>City:</strong> {user.address.city}
            </p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default UsersList;
