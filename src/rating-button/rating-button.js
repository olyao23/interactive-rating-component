import React, { useState } from "react";
import styles from "./rating-button.module.css";

export default function RatingButton({ ratingNumber, onClick, isActive }) {
  return (
    <button
      onClick={onClick}
      className={isActive ? styles.activeButton : styles.ratingStyle}
    >
      {ratingNumber}
    </button>
  );
}
