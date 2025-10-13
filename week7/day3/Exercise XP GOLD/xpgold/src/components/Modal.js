import React, { Component } from "react";
import "./Modal.css";

class Modal extends Component {
  render() {
    return (
      <div className="modal-background">
        <div className="modal-body">
          <h4>Error: Something went wrong!</h4>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.props.error && this.props.error.toString()}
            <br />
            {this.props.errorInfo && this.props.errorInfo.componentStack}
          </details>
          <p>Please try it again</p>
          <button onClick={this.props.onClose}>Close</button>
        </div>
      </div>
    );
  }
}

export default Modal;
