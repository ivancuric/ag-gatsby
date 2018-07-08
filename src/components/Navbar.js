import React from 'react';
import Link from 'gatsby-link';

const Navbar = () => (
  <header>
    <div className="container">
      <nav className="nav">
        <Link to="/">Homepage</Link>
        <Link to="/about">About</Link>
        <Link to="/schedule">Schedule</Link>
        <Link to="/rules">Rules</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/register">Register</Link>
      </nav>
    </div>
  </header>
);

export default Navbar;
