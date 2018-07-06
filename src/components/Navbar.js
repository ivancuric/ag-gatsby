import React from 'react';
import Link from 'gatsby-link';

const Navbar = () => (
  <nav>
    <div>
      <Link to="/">Homepage</Link>
    </div>
    <div>
      <Link to="/rules">Rules</Link>
    </div>
    <div>
      <Link to="/schedule">Schedule</Link>
    </div>
  </nav>
);

export default Navbar;
