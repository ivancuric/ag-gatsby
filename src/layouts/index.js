import React from 'react';
import Helmet from 'react-helmet';
import { injectGlobal } from 'emotion';
import sanitize from 'sanitize.css';

injectGlobal(sanitize);

import Navbar from '../components/Navbar';

export default ({ children }) => {
  return (
    <div>
      <Helmet title="Ars Gladiatoria" />
      <Navbar />
      <div>{children()}</div>
    </div>
  );
};
