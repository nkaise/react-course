export const ReviewsList = ({ reviews }) => {
  return (
    <>
      <h3>Отзывы</h3>
      <ul>
        {reviews.reviews.map((review) => (
          <li>{review.text}</li>
        ))}
      </ul>
    </>
  );
};
