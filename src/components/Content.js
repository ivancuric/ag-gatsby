import React from 'react';
import PropTypes from 'prop-types';
import HTMLParser from 'html-react-parser';

export const HTMLContent = ({ content, className }) => (
  <div className={className}>{HTMLParser(content)}</div>
);

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
);

Content.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string,
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
