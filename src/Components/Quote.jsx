import React from 'react';

const QuoteOverlay = ({ isBlack }) => {
  const quote = isBlack ? "In the dark, we find light." : "Rise and grind!";
  const textColor = isBlack ? "black" : "white";

  return (
    <div className="quote-overlay" style={{ color: textColor, position: 'absolute', top: '20%', right: '5%', textAlign: 'right', fontSize: 'calc(1.30em + 1vw)' }}>
      <p>{quote}</p>
    </div>
  );
};

export default QuoteOverlay;
