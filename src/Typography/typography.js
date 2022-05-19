import React from "react";
import styles from "../Typography/typography.module.css";
import starImage from "../Images/icon-star.svg";

export default function Typography() {
    return (
        <div className={styles.typographyStyle}>
            <span className={styles.starStyle}><img src={starImage} alt=""/></span>
            <h2 className={styles.headerStyle}>How did we do?</h2>
            <p className={styles.paragraphStyle}>Please let us know how we did with your support request. All feedback is appreciated
                to help us improve our offering!</p>
        </div>
    )
}