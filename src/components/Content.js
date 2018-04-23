import React from 'react';
import HTMLParser from 'html-react-parser';

export const HTMLContent = ({ content, className }) => (
  <div className={className}>{HTMLParser(content)}</div>
);

export const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
);
