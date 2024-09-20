import React from 'react';
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in ErrorBoundary: ", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='h-screen w-screen bg-green-100 flex items-center justify-center mx-auto'>
          <div className="w-3/4 md:w-1/2 h-72 md:h-96 bg-green-200 flex flex-col items-center justify-center gap-4 rounded-md shadow-md ">
            <h1 className="text-2xl font-bold">Something went wrong.</h1>
            <p>Please try again later.</p>
            <a className="bg-green-400 hover:bg-green-300 text-gray-800 py-2 px-4 rounded-full shadow-md" href='/' >Go to Home</a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
