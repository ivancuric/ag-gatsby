import React from 'react';
import Helmet from 'react-helmet';
import '../styles/main.scss';
import Navbar from '../components/Navbar';

export default ({ children, data }) => (
  <React.Fragment>
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
      <meta name="description" content={data.site.siteMetadata.description} />
    </Helmet>
    <Navbar />
    <main>{children()}</main>
  </React.Fragment>
);

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
