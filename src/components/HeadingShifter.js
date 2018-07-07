import React from 'react';
import rehypeReact from 'rehype-react';

const HeadingShifter = props => {
  const shift = Number(props.shift || 0);
  const components = {};

  const clamp = n => Math.min(6, Math.max(1, n));

  for (let i = 1; i < 7; i++) {
    components[`h${i}`] = `h${clamp(i + shift)}`;
  }

  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components,
  }).Compiler;

  return renderAst(props.htmlAst).props.children;
};

export default HeadingShifter;
