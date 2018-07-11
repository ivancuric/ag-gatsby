import React from 'react';
import Helmet from 'react-helmet';
import HeadingShifter from '../components/HeadingShifter';

const RulesPage = props => {
  const post = props.data.markdownRemark;
  const title = 'Tournament Rules';

  return (
    <section>
      <Helmet title={title} />
      <div className="container">
        <div className="rt">
          <h1>{title}</h1>
          <HeadingShifter htmlAst={post.htmlAst} shift="1" />
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
