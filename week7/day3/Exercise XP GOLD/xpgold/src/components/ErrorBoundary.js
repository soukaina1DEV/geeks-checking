import React, { Component } from "react";
import Modal from "./Modal";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    console.error("Error caught by boundary:", error, errorInfo);
  }

  closeModal = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <Modal
          error={this.state.error}
          errorInfo={this.state.errorInfo}
          onClose={this.closeModal}
        />
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
