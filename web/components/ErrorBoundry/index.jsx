import React from "react";
import { ErrorMessage } from "./styled";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log("componentDidCatch an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <ErrorMessage>
          <div className="content">
            <h2>Something went wrong.</h2>
            <p>
              Consider reloading to view the 3d model or inform the owner of
              this site
            </p>
          </div>
        </ErrorMessage>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
