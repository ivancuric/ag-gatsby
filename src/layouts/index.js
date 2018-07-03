import React from 'react';
import Helmet from 'react-helmet';
// import { injectGlobal } from 'emotion';
import normalize from 'normalize.css/normalize.css';

import Navbar from '../components/Navbar';

console.log(normalize);

export default ({ children }) => {
  return (
    <div>
      <Helmet title="Ars Gladiatoria" />
      <Navbar />
      <div>{children()}</div>
    </div>
  );
};
