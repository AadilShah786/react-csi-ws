// App.js
import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

// Home component for the home page
const Home = () => (
  <div>
    <h2>Welcome to the Home Page!</h2>
    <p>This is the main page of our website.</p>
  </div>
);

// Contact component for the contact page
const Contact = () => (
  <div>
    <h2>Contact Us</h2>
    <p>You can reach us at contact@example.com.</p>
  </div>
);

// App component, the main entry point of the application
const RouteEg = () => (
  <Router>
    <div>
      <nav>
        {/* Navigation links using the Link component from React Router */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Route configuration using the Switch and Route components from React Router */}
      {/* <Switch> */}
        {/* Route for the home page */}
        <Routes>
        <Route path="/" exact component={Home} />

        {/* Route for the contact page */}
        <Route path="/contact" component={Contact} />
        </Routes>
      {/* </Switch> */}
    </div>
  </Router>
);

export default RouteEg;
