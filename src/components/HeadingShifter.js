import React from 'react';
import rehypeReact from 'rehype-react';

const HeadingShifter = props => {
  const shift = Number(props.shift || 0);
  const components = {};

  for (let i = 1; i < 7; i++) {
    let shifted = i + shift;

    if (shifted < 1) shifted = 1;
    if (shifted > 6) shifted = 6;

    components[`h${i}`] = `h${shifted}`;
  }

  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components,
  }).Compiler;

  return <div className="md">{renderAst(props.htmlAst).props.children}</div>;
};

export default HeadingShifter;
