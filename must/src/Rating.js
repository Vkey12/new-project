import React, { useState } from 'react';

function Rating({ onRate }) {
  const [rating, setRating] = useState(0);

  const handleRate = (value) => {
    setRating(value);
    onRate(value);
  };

  return (
    <div className='all-rates'>
      <h2 className='head-rates'>Rate the App</h2>
      <div className='rates'>
        {[1, 2, 3, 4, 5].map((value) => (
          <button key={value} onClick={() => handleRate(value)}>
            {value}
          </button>
        ))}
      </div>
      <p className='final-rating'>Your rating: {rating}</p>
    </div>
  );
}

export default Rating;
