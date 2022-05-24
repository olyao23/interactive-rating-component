import React, { useState } from "react";
import styles from "./rating-button.module.css";

export default function RatingButton({ ratingNumber }) {
  function showRating() {
    console.log("rating button " + ratingNumber + " clicked");
  }

  return (
    <button onClick={showRating} className={styles.ratingStyle}>
      {ratingNumber}
    </button>
  );
}
