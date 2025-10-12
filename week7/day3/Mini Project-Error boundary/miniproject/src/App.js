import React from "react";
import ColumnLeft from "./columns/ColumnLeft";
import ColumnRight from "./columns/ColumnRight";
import ErrorBoundary from "./ErrorBoundary";
import "./App.css";

function App() {
  return (
    <div className="container-fluid">
      <header className="navbar navbar-dark bg-dark">
        <span className="navbar-brand">Error boundaries in react</span>
      </header>

      <div className="row">
        <div className="col-4 border-end">
          <ColumnLeft />
        </div>

        <div className="col-8">
          {/* ErrorBoundary wraps the right column */}
          <ErrorBoundary>
            <ColumnRight />
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
}

export default App;
