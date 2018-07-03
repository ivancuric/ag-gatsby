import React from 'react';
import Helmet from 'react-helmet';
import { injectGlobal } from 'emotion';
import sanitize from 'sanitize.css';

injectGlobal(sanitize);

import Navbar from '../components/Navbar';

export default ({ children }) => {
  return (
    <React.Fragment>
      <Helmet title="Ars Gladiatoria" />
      <Navbar />
      <main>{children()}</main>
    </React.Fragment>
  );
};
