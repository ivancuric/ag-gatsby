import React from 'react';
import Link from 'gatsby-link';

const indexPage = props => {
  const posts = props.data.allMarkdownRemark.edges;

  return (
    <section>
      <div>
        <h1>Latest Stories</h1>
        {posts.map(post => {
          const node = post.node;

          return (
            <div key={node.id}>
              <p>
                <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                <br />
                <small>{node.frontmatter.date}</small>
              </p>
              <p>
                {node.excerpt}
                <br />
                <Link to={node.fields.slug}>Keep Reading</Link>
              </p>
            </div>
          );
        })}
      </div>
    </section>
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
