import React, { useState } from "react";
import ErrorBoundary from "../ErrorBoundary";

export default function ColumnRight() {
  const [text, setText] = useState('{"function":"I live to crash"}');

  const replaceWithObject = () => {
    setText({ function: "I live to crash" }); // triggers render error
  };

  const invokeEventHandler = () => {
    throw new Error("This is an event handler error!");
  };

  return (
    <div className="p-4">
      <h5>Right column</h5>
      <p>
        There are two types of errors we can trigger inside this component: A
        rendering error and a regular javascript error.
      </p>

      <ErrorBoundary>
        <p>
          Clicking this button will replace the <code>stringified</code> object,{" "}
          {text}, with the original object. This will result in a rendering
          error.
        </p>
      </ErrorBoundary>

      <button className="btn btn-danger my-2" onClick={replaceWithObject}>
        Replace string with object
      </button>

      <button className="btn btn-danger my-2" onClick={invokeEventHandler}>
        Invoke event handler
      </button>
    </div>
  );
}
