import React from 'react';
import Helmet from 'react-helmet';
import '../styles/main.scss';
import Navbar from '../components/Navbar';
import WebFont from 'webfontloader';

export default class Layout extends React.Component {
  constructor({ children, data }) {
    super();
    this.children = children;
    this.data = data;
  }

  componentDidMount() {
    WebFont.load({
      google: {
        families: ['Lora:400,700', 'IBM Plex Serif:400,500,600,700'],
      },
    });
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>{this.data.site.siteMetadata.title}</title>
          <meta
            name="description"
            content={this.data.site.siteMetadata.description}
          />
        </Helmet>
        <Navbar />
        <main>{this.children()}</main>
      </React.Fragment>
    );
  }
}

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
