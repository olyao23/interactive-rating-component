import styles from "./rating-button.module.css";

export default function RatingButton({ ratingNumber, onClick }) {
  if (onClick === true) {
    return (
      <button
        onClick={onClick}
        className={
          onClick ? styles.selectedRatingButtonStyle : styles.ratingStyle
        }
      >
        {ratingNumber}
      </button>
    );
  } else {
    return (
      <button onClick={onClick} className={styles.ratingStyle}>
        {ratingNumber}
      </button>
    );
  }
}
