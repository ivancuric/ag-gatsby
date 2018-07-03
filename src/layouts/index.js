import React from 'react';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';

export default ({ children }) => {
  console.log(children);
  return (
    <div>
      <Helmet title="Ars Gladiatoria" />
      <Navbar />
      <div>{children()}</div>
    </div>
  );
};
