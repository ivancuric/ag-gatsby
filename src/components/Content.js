import React from 'react';
import PropTypes from 'prop-types';
import Parser from 'html-react-parser';

export const HTMLContent = ({ content, className }) => (
  <div className={className}>{Parser(content)}</div>
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
