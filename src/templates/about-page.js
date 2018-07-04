import React from 'react';
import Helmet from 'react-helmet';
import HTMLParser from 'html-react-parser';

const AboutPage = props => {
  const post = props.data.markdownRemark;
  const title = post.frontmatter.title;
  const content = post.html;

  return (
    <section>
      <Helmet title={`${title}`} />
      <h2>{title}</h2>
      <div>{HTMLParser(content)}</div>
    </section>
  );
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
