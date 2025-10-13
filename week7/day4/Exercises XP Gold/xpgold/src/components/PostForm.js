import React, { Component } from "react";
import axios from "axios";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { userId, title, body } = this.state;
    const postData = { userId, title, body };

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        postData
      );
      console.log(response.data); 
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  render() {
    const { userId, title, body } = this.state;

    return (
      <div style={{ margin: "40px" }}>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="userId"
            placeholder="User ID"
            value={userId}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            name="body"
            placeholder="Body"
            value={body}
            onChange={this.handleChange}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
