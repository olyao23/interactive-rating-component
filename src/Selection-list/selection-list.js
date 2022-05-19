import React from "react";
import styles from "./selection-list.module.css";

export default function SelectionList() {
    return (
        <div className={styles.listStyle}>
            <div className={styles.ratingListCircle}><span className={styles.ratingStyle}>1</span></div>
            <div className={styles.ratingListCircle}><span className={styles.ratingStyle}>2</span></div>
            <div className={styles.ratingListCircle}><span className={styles.ratingStyle}>3</span></div>
            <div className={styles.ratingListCircle}><span className={styles.ratingStyle}>4</span></div>
            <div className={styles.ratingListCircle}><span className={styles.ratingStyle}>5</span></div>
        </div>
    )
}