import React from 'react';
import NewsArticle from '../components/NewsArticle';
import HeroSection from '../components/HeroSection';

const indexPage = props => {
  const posts = props.data.allMarkdownRemark.edges;

  return (
    <div>
      <HeroSection />
      <div className="container">
        <section className="section-split">
          <h2>News</h2>
          {posts.map(({ node }) => <NewsArticle {...node} key={node.id} />)}
        </section>
        <section className="section-split">
          <h2>Partners</h2>
          <ul className="partner-grid">
            <li>Neyman Fencing</li>
            <li>Arming Guild</li>
            <li>Teximp 360° CNC solutions</li>
          </ul>
        </section>
      </div>
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
