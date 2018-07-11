import React from 'react';
import Link from 'gatsby-link';

const Image = ({ src, alt }) => {
  const baseUrl =
    'https://res.cloudinary.com/ars-gladiatoria-zagreb/image/upload';
  const size = 200;
  const params = ['c_fill', 'g_auto', 'f_auto', 'q_auto:best'].join(',');
  return <img src={`${baseUrl}/${params},w_${size}/${src}`} alt={alt} />;
};

const Navbar = () => (
  <header className="navbar">
    <nav className="nav">
      <Link className="logo" to="/" title="Homepage">
        <Image src="v1531172911/logos/NeCro-LOGO.png" />
      </Link>
      <Link to="/about">About</Link>
      <Link to="/schedule">Schedule</Link>
      <Link to="/rules">Rules</Link>
      <Link to="/team">Team</Link>
      <Link className="register-button" to="/register">Register</Link>
    </nav>
  </header>
);

export default Navbar;
