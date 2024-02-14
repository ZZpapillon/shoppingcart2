// CircleIndicator.js
import React from 'react';

const CircleIndicator = ({ totalSlides, currentSlide }) => {
  const circles = [];
  for (let i = 0; i < totalSlides; i++) {
    circles.push(
      <div
        key={i}
        className={`circle ${i === currentSlide ? 'active' : ''}`}
      ></div>
    );
  }

  return <div className="circle-indicator">{circles}</div>;
};

export default CircleIndicator;
