import React from 'react';
import NewsArticle from '../components/NewsArticle';
import Link from 'gatsby-link';

const indexPage = props => {
  const posts = props.data.allMarkdownRemark.edges;

  return (
    <div className="container">
      <section>
        <div className="rt">
          <h1>Neyman Fencing Tournament 2018</h1>
          <p>25th and 26th of August 2018</p>
          <p>
            First international longsword and one-handed sword open tournament in
            Croatia held by Ars Gladiatoria Zagreb and Academia Artis Dimicatoriae
          </p>
        </div>
        <Link to="/tickets">Get the ticket</Link>
      </section>
      <section>
        <h2>News</h2>
        {posts.map(({ node }) => <NewsArticle {...node} key={node.id} />)}
      </section>
      <section>
        <div className="rt">
          <h2>Partners</h2>
          <ul>
            <li>Neyman Fencing</li>
            <li>Arming Guild</li>
            <li>Teximp 360° CNC solutions</li>
          </ul>
        </div>
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
