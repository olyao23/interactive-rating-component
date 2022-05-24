import React, { useState } from "react";
import styles from "./rating-button.module.css";

export default function RatingButton({ ratingNumber }) {
  return <button className={styles.ratingStyle}>{ratingNumber}</button>;
}
