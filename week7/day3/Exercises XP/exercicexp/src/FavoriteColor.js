import React, { Component } from "react";

class FavoriteColor extends Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: "red" };
  }

  static getDerivedStateFromProps(props, state) {
    return null;
  }

  shouldComponentUpdate() {
    console.log("in shouldComponentUpdate");
    return true; 
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
    }, 2000);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("in getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("after update");
  }

  render() {
    return (
      <h1>
        My Favorite Color is <i>{this.state.favoriteColor}</i>
      </h1>
    );
  }
}

export default FavoriteColor;
