import React from 'react';
import Helmet from 'react-helmet';
// import 'sanitize.css';
// import '../styles/main.scss';
import Navbar from '../components/Navbar';

export default props => {
  return (
    <React.Fragment>
      <Helmet title="Ars Gladiatoria" />
      <Navbar />
      <main>{props.children()}</main>
    </React.Fragment>
  );
};
