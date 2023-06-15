import React from 'react';

const Highlight = ({ children, color, radius, padding }) => {
  return (
    <span
      style={{
        backgroundColor: color,
        borderRadius: radius || '2px',
        color: '#fff',
        padding: padding || '0.2rem',
      }}
    >
      {children}
    </span>
  );
};

export default Highlight;