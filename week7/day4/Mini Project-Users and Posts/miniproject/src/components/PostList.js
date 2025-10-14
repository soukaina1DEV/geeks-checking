import React, { Component } from "react";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      errorMsg: "",
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      this.setState({ posts: data });
    } catch (error) {
      this.setState({ errorMsg: "Error fetching data" });
    }
  }

  render() {
    const { posts, errorMsg } = this.state;

    return (
      <div style={{ margin: "20px", padding: "20px", borderRadius: "10px" }}>
        <h2 style={{ textAlign: "center" }}>List of posts:</h2>
        {posts.length
          ? posts.map((post) => (
              <div key={post.id} style={{ marginBottom: "15px" }}>
                <p>
                  <strong>ID:</strong> {post.id}
                </p>
                <p>
                  <strong>Title:</strong> {post.title}
                </p>
                <p>
                  <strong>Body:</strong> {post.body}
                </p>
                <hr />
              </div>
            ))
          : null}
        {errorMsg ? <div>{errorMsg}</div> : null}
      </div>
    );
  }
}

export default PostList;
