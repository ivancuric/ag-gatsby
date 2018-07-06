import React from 'react';
import rehypeReact from 'rehype-react';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    h1: 'h2',
    h2: 'h3',
    h3: 'h4',
    h5: 'h6',
  },
}).Compiler;

const ModifyHeadings = props => {
  return renderAst(props.children);
};

export default ModifyHeadings;
