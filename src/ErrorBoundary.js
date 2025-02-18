import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    // Update state to indicate that an error has occurred
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Catch and log errors to the console for debugging
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Display the error message and error stack
      return (
        <div style={{ padding: '20px', border: '1px solid red', color: 'red' }}>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            <summary>Error Details</summary>
            <p><strong>Error:</strong> {this.state.error?.toString()}</p>
            <p><strong>Stack:</strong> {this.state.error?.stack}</p>
            <p><strong>Component Stack:</strong> {this.state.errorInfo?.componentStack}</p>
          </details>
          {/* Optional reset button to try again */}
          <button
            onClick={() => this.setState({ hasError: false, error: null, errorInfo: null })}
            style={{ marginTop: '20px', padding: '10px', background: 'lightgray' }}
          >
            Try Again
          </button>
        </div>
      );
    }

    // When there's no error, render the children as usual
    return this.props.children;
  }
}

export default ErrorBoundary;
