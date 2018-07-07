import React from 'react';
import Link from 'gatsby-link';

const Navbar = () => (
  <header>
    <div className="container">
      <nav className="nav">
        <Link to="/">Homepage</Link>
        <Link to="/">Register</Link>
        <Link to="/">About</Link>
        <Link to="/rules">Rules</Link>
        <Link to="/schedule">Schedule</Link>
        <Link to="/">Contact</Link>
      </nav>
    </div>
  </header>
);

export default Navbar;
