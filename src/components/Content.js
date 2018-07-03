import React from 'react';
import HTMLParser from 'html-react-parser';

export const HTMLContent = ({ content }) => <div>{HTMLParser(content)}</div>;

export const Content = ({ content }) => <div>{content}</div>;
