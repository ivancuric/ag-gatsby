import React from 'react';
import NewsArticle from '../components/NewsArticle';

const indexPage = props => {
  const posts = props.data.allMarkdownRemark.edges;

  return (
    <div className="container">
      <header>
        <h1>Neyman Fencing Tournament 2018</h1>
        <p>25th and 26th of August 2018</p>
      </header>
      <section>
        <h2>News</h2>
        {posts.map(({ node }) => {
          return <NewsArticle {...node} key={node.id} />;
        })}
      </section>
    </div>
  );
};

export default indexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "news-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "DD MMMM YYYY", locale: "en")
          }
        }
      }
    }
  }
`;
