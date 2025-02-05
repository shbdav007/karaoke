import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { checkAuth } from "../utils/auth";

const HomePage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated
    setIsAuthenticated(checkAuth());
  }, []);

  return (
    <div className="home-page">
      <h1>Welcome to Karaoke App</h1>
      {!isAuthenticated ? (
        <div>
          <Link to="/login" className="btn">Login</Link>
          <Link to="/signup" className="btn">Sign Up</Link>
        </div>
      ) : (
        <div>
          <Link to="/catalog" className="btn">Explore Songs</Link>
        </div>
      )}
    </div>
  );
};

export default HomePage;
