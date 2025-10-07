import React from "react";

class UserFavoriteAnimals extends React.Component {
  render() {
    const { favAnimals } = this.props;

    return (
      <div>
        <h4>My Favorite Animals:</h4>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {favAnimals.map((animal, index) => (
            <li key={index}>{animal}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserFavoriteAnimals;
