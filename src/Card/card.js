import React from "react";
import Button from "../Button/button";
import Typography from "../Typography/typography";
import SelectionList from "../Selection-list/selection-list";
import styles from "../Card/card.module.css"

export default function Card() {
    return (
        <div className={styles.cardStyle}>
            <Typography/>
            <SelectionList/>
            <Button/>
        </div>
    )
}