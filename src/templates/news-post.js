import React from 'react';
import Helmet from 'react-helmet';
import HTMLParser from 'html-react-parser';

const BlogPost = props => {
  const post = props.data.markdownRemark;
  const title = post.frontmatter.title;
  const content = post.html;
  const description = post.frontmatter.description;

  return (
    <section>
      <Helmet title={`${title} | Blog`} />
      <div className="container rt">
        <header>
          <h1>{title}</h1>
          <div>
            {description && <p>{description}</p>}
            <small>{post.frontmatter.date}</small>
          </div>
        </header>
        <div>{HTMLParser(content)}</div>
      </div>
    </section>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "DD MMMM YYYY", locale: "en")
        title
        description
      }
    }
  }
`;
