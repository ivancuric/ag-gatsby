import React from 'react';
import Link from 'gatsby-link';

const NewsArticle = node => (
  <article>
    <header>
      <h3>
        <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
      </h3>
      <small>{node.frontmatter.date}</small>
    </header>
    <p>{node.excerpt}</p>
    <Link to={node.fields.slug}>Keep Reading</Link>
  </article>
);

export default NewsArticle;