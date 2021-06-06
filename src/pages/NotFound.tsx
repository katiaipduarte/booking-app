import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className="centered-container">
      <h1>
        Page not found. Go back to
        <Link to="/" replace>
          {` homepage.`}
        </Link>
      </h1>
    </main>
  );
};

export default NotFound;
