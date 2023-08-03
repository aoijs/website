import React from 'react';

const Highlight = ({ children, color, radius, padding, marginRight }) => {
  return (
    <span
      style={{
        backgroundColor: color,
        borderRadius: radius || '2px',
        color: '#fff',
        padding: padding || '0.4rem',
        marginRight: marginRight || '0.3rem',
      }}
    >
      {children}
    </span>
  );
};

export default Highlight;