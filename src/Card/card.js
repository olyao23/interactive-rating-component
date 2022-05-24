import React, { useState } from "react";
import Typography from "../Typography/typography";
import RatingButton from "../rating-button/rating-button";
import styles from "../Card/card.module.css";
import starImage from "../Images/icon-star.svg";
import thankYouImage from "../Images/illustration-thank-you.svg";

export default function Card() {
  const [hideRating, setHideRating] = useState(true);

  let [rating, saveRating] = useState(0);

  function handleClick() {
    setHideRating(!hideRating);
  }

  return (
    <>
      <div className={styles.cardStyle}>
        {hideRating ? (
          <div className={styles.ratingCard}>
            <span className={styles.starStyle}>
              <img src={starImage} alt="star image" />
            </span>
            <Typography
              title="How did we do?"
              content="Please let us know how we did with your support request. All feedback is appreciated
                            to help us improve our offering!"
            />
            <RatingButton ratingNumber={"1"} />
            <RatingButton ratingNumber={"2"} />
            <RatingButton ratingNumber={"3"} />
            <RatingButton ratingNumber={"4"} />
            <RatingButton ratingNumber={"5"} />

            <button onClick={handleClick} className={styles.buttonStyle}>
              SUBMIT
            </button>
          </div>
        ) : (
          <div className={styles.thankYouCard}>
            <img src={thankYouImage} alt="phone image" />

            <div className={styles.selection}>
              You selected <span>{rating}</span> out of 5
            </div>

            <Typography
              title="Thank you!"
              content="We appreciate you taking the time to give a rating. If you ever need
              more support, don't hesitate to get in touch!"
            />
          </div>
        )}
      </div>
    </>
  );
}
