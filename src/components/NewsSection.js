import React from 'react';
import NewsArticle from '../components/NewsArticle';

const NewsSection = props => {
  const posts = props.data.allMarkdownRemark.edges;

  return (
    <section className="section-split">
      <h2>News</h2>
      {posts.map(({ node }) => <NewsArticle {...node} key={node.id} />)}
    </section>
  );
};

export default NewsSection;
