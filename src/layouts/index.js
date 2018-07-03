import React from 'react';
import Helmet from 'react-helmet';

import { injectGlobal } from 'emotion';
import sanitize from '!raw-loader!sanitize.css';
import Navbar from '../components/Navbar';

injectGlobal(sanitize);

export default props => {
  return (
    <React.Fragment>
      <Helmet title="Ars Gladiatoria" />
      <Navbar />
      <main>{props.children()}</main>
    </React.Fragment>
  );
};
