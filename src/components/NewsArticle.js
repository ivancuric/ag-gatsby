import React from 'react';
import Link from 'gatsby-link';

const NewsArticle = node => (
  <article className="news-article">
    <header className="news-article-header">
      <h3>
        <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
      </h3>
      <small className="news-article-date">{node.frontmatter.date}</small>
    </header>
    <p className="news-article-excerpt">{node.excerpt}</p>
  </article>
);

export default NewsArticle;
