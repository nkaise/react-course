import styles from "./reviewsList.module.css";

export const ReviewsList = ({ reviews }) => {
  return (
    <>
      <h3 className={styles.reviewName}>Отзывы</h3>
      <ul className={styles.reviewList}>
        {reviews.map((review) => (
          <li key={review.id} className={styles.reviewItem}>
            {review.text}
          </li>
        ))}
      </ul>
    </>
  );
};
