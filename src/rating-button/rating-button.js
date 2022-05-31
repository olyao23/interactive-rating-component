import styles from "./rating-button.module.css";

export default function RatingButton({ ratingNumber, onClick }) {
  return (
    <button onClick={onClick} className={styles.ratingStyle}>
      {ratingNumber}
    </button>
  );
}
