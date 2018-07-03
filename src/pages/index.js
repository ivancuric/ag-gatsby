import React from 'react';
import Link from 'gatsby-link';

const indexPage = props => {
  const { data } = props;
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <section>
      <div>
        <h1>Latest Stories</h1>
        {posts.map(({ node: post }) => (
          <div key={post.id}>
            <p>
              <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
              <br />
              <small>{post.frontmatter.date}</small>
            </p>
            <p>
              {post.excerpt}
              <br />
              <Link to={post.fields.slug}>Keep Reading →</Link>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default indexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
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
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
