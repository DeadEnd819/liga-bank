import React from 'react';
import {Link} from "react-router-dom";

const ErrorScreen = () => {
  return (
    <>
      <h1>404.</h1>
      <p>Page not found</p>
      <Link to={`/`}>Go to main page</Link>
    </>
  );
};

export default ErrorScreen;
