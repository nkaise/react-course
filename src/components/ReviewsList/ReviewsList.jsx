export const ReviewsList = ({ data }) => {
  return (
    <ul>
      {data.reviews.map((review) => (
        <li>{review.text}</li>
      ))}
    </ul>
  );
};
