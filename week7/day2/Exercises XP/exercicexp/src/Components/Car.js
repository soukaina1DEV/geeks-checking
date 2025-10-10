import React, { useState } from "react";
import Garage from "./Garage";

function Car(props) {
  const [color, setColor] = useState("red");

  const model = props.carInfo.model;

  return (
    <div>
      <h2>
        This car is a {color} {model}.
      </h2>

      <Garage size="small" />
    </div>
  );
}

export default Car;
