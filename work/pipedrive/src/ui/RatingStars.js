// src/ui/RatingStars.js
import React, { useState } from 'react';
import './RatingStars.css'; // Link to its specific CSS file

function RatingStars({ initialRating = 0, maxRating = 5, onRatingChange }) {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (index) => {
    setRating(index);
    if (onRatingChange) {
      onRatingChange(index); // Call a prop function if provided
    }
  };

  const handleMouseEnter = (index) => {
    setHoverRating(index);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  return (
    <div className="rating-stars">
      {[...Array(maxRating)].map((_, index) => {
        index += 1; // Stars are 1-indexed

        return (
          <span
            key={index}
            className={index <= (hoverRating || rating) ? "star-on" : "star-off"}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            &#9733; {/* Unicode star character */}
          </span>
        );
      })}
    </div>
  );
}

export default RatingStars;