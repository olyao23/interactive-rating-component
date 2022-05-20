import React from "react";
import styles from "../Typography/typography.module.css";

export default function Typography(title, content) {
    return (
        <div>
            <h2 className={styles.headerStyle}>Thank you!</h2>
            <p className={styles.paragraphStyle}>We appreciate you taking the time to give a rating. If you ever need
                more support, don't hesitate to get in touch!</p>
        </div>
    )
}

//treba {title} i {content} ama ne ja pokazuva