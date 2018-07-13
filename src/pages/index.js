import React from 'react';
import NewsSection from '../components/NewsSection';
import HeroSection from '../components/HeroSection';

const Image = ({ src, alt }) => {
  const baseUrl =
    'https://res.cloudinary.com/ars-gladiatoria-zagreb/image/upload';
  const w = 180;
  const h = 150;
  const params = [
    'e_trim:10',
    '/',
    'b_rgb:ffffff',
    'c_limit',
    'q_auto:best',
  ].join(',');
  return <img src={`${baseUrl}/${params},w_${w},h_${h}/${src}`} alt={alt} />;
};

const indexPage = props => {
  return (
    <div>
      <HeroSection />
      <div className="container">
        {props.data.allMarkdownRemark && <NewsSection {...props} />}
        <section className="section-split">
          <h2>Partners</h2>
          <ul className="partner-grid">
            <li>
              <Image
                src="v1531395145/logos/Theknightshop_logo_long"
                alt="The Knight Shop International"
              />
            </li>
            <li>
              <Image
                src="v1531429590/logos/Neyman_Fencing_logo_long"
                alt="Neyman Fencing"
              />
            </li>
            <li>
              <Image
                src="v1531395142/logos/PBT_logo_long"
                alt="PBT Historical Fencing"
              />
            </li>
            <li>
              <Image
                src="v1531429795/Teximp_logo_long"
                alt="Teximp 360° CNC solutions"
              />
            </li>
            <li>
              <Image
                src="v1531396013/logos/Kvetun_armory_short"
                alt="Kvetun Armory"
              />
            </li>
            <li>
              <Image
                src="v1531391680/logos/Arming_guild_logo_long.jpg"
                alt="Arming Guild"
              />
            </li>
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
