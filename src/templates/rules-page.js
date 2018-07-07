import React from 'react';
import Helmet from 'react-helmet';
import HeadingShifter from '../components/HeadingShifter';

const RulesPage = props => {
  const post = props.data.markdownRemark;
  const title = post.frontmatter.title;
  const content = post.htmlAst;

  return (
    <section>
      <Helmet title={title} />
      <div className="container">
        <h1>{title}</h1>
        <div className="md">
          <HeadingShifter shift="1">{content}</HeadingShifter>
        </div>
      </div>
    </section>
  );
};

export default RulesPage;

export const rulesPageQuery = graphql`
  query RulesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      htmlAst
      frontmatter {
        title
      }
    }
  }
`;
