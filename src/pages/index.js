import React from 'react';
import NewsSection from '../components/NewsSection';
import HeroSection from '../components/HeroSection';

const indexPage = props => {
  return (
    <div>
      <HeroSection />
      <div className="container">
        {props.data.allMarkdownRemark && <NewsSection {...props} />}
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
  query NewsPostQuery {
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
