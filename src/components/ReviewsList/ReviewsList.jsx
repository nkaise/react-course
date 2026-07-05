export const ReviewsList = ({ reviews }) => {
  return (
    <ul>
      {reviews.reviews.map((review) => (
        <li>{review.text}</li>
      ))}
    </ul>
  );
};
