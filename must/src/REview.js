import React, { useState } from 'react';

function Reviews({ onAddReview }) {
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([]);

  const handleChange = (e) => {
    setReview(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, { text: review }]);
    setReview('');
    onAddReview(review);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Add a review:
        <input type="text" value={review} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
      {reviews.map((review, index) => (
        <p key={index}>{review.text}</p>
      ))}
    </form>
  );
}

export default Reviews;