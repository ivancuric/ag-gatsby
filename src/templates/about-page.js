import React from 'react';
import Helmet from 'react-helmet';
import ModifyHeadings from '../components/ModifyHeadings';

const AboutPage = props => {
  const post = props.data.markdownRemark;
  const title = post.frontmatter.title;
  const content = post.htmlAst;

  return (
    <section>
      <Helmet title={`${title}`} />
      <h1>{title}</h1>
      <ModifyHeadings>{content}</ModifyHeadings>
    </section>
  );
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      htmlAst
      frontmatter {
        title
      }
    }
  }
`;
