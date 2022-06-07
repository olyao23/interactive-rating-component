import { useState } from "react";
import Typography from "../Typography/typography";
import RatingButton from "../rating-button/rating-button";
import styles from "../Card/card.module.css";
import starImage from "../Images/icon-star.svg";
import thankYouImage from "../Images/illustration-thank-you.svg";

export default function Card() {
  //handleClick shows and hides the first and second card
  const [hideRating, setHideRating] = useState(true);

  function handleClick() {
    setHideRating(!hideRating);
  }

  //setRatingNumber shows which rating button was clicked
  const [ratingNumber, setRatingNumber] = useState(0);

  const [selectedColor, setSelectedColor] = useState(false);

  //default #384656

  return (
    <>
      <div className={styles.cardStyle}>
        {hideRating ? (
          <div className={styles.ratingCard}>
            <div className={styles.starStyle}>
              <img src={starImage} alt="star image" />
            </div>

            <Typography
              title="How did we do?"
              content="Please let us know how we did with your support request. All feedback is appreciated
                            to help us improve our offering!"
            />

            <div className={styles.ratingButtonsStyle}>

              <RatingButton
                style={{
                  backgroundColor: selectedColor ? "hsl(25, 97%, 53%)" : "#384656",
                  borderRadius: "25px",
                  padding: "14px 20px",
                  color: selectedColor ? "white" : "hsl(217, 12%, 63%)",
                  border: "transparent",
                  fontFamily: "'Overpass', sans-serif",
                  fontWeight: "700",
                }}
                ratingNumber={"1"}
                onClick={() => {
                  setRatingNumber(1);
                  setSelectedColor(true)
                }}
              />

              <RatingButton
                style={{
                  backgroundColor: selectedColor ? "hsl(25, 97%, 53%)" : "#384656",
                  borderRadius: "25px",
                  padding: "14px 20px",
                  color: selectedColor ? "white" : "hsl(217, 12%, 63%)",
                  border: "transparent",
                  fontFamily: "'Overpass', sans-serif",
                  fontWeight: "700",
                }}
                ratingNumber={"2"}
                onClick={() => {
                  setRatingNumber(2);
                  setSelectedColor(true)
                }}
              />
              <RatingButton
                style={{
                  backgroundColor: selectedColor ? "hsl(25, 97%, 53%)" : "#384656",
                  borderRadius: "25px",
                  padding: "14px 20px",
                  color: selectedColor ? "white" : "hsl(217, 12%, 63%)",
                  border: "transparent",
                  fontFamily: "'Overpass', sans-serif",
                  fontWeight: "700",
                }}
                ratingNumber={"3"}
                onClick={() => {
                  setRatingNumber(3)
                  setSelectedColor(true)
                }}
              />
              <RatingButton
                style={{
                  backgroundColor: selectedColor ? "hsl(25, 97%, 53%)" : "#384656",
                  borderRadius: "25px",
                  padding: "14px 20px",
                  color: selectedColor ? "white" : "hsl(217, 12%, 63%)",
                  border: "transparent",
                  fontFamily: "'Overpass', sans-serif",
                  fontWeight: "700",
                }}
                ratingNumber={"4"}
                onClick={() => {
                  setRatingNumber(4)
                  setSelectedColor(true)
                }}
              />
              <RatingButton
                style={{
                  backgroundColor: selectedColor ? "hsl(25, 97%, 53%)" : "#384656",
                  borderRadius: "25px",
                  padding: "14px 20px",
                  color: selectedColor ? "white" : "hsl(217, 12%, 63%)",
                  border: "transparent",
                  fontFamily: "'Overpass', sans-serif",
                  fontWeight: "700",
                }}
                ratingNumber={"5"}
                onClick={() => {
                  setRatingNumber(5)
                  setSelectedColor(true)
                }}
              />
            </div>

            <button onClick={handleClick} className={styles.buttonStyle}>
              SUBMIT
            </button>
          </div>
        ) : (
          <div className={styles.thankYouCard}>
            <img src={thankYouImage} alt="phone image" />

            <div className={styles.selection}>
              You selected <span>{ratingNumber}</span> out of 5
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

//<RatingButton ratingNumber={"2"} onClick={setRatingNumber(1)} />
//this worked, then I opened the project again after a while and now it doesn't work
//question is, it worked, and then it didn't work, and I googled for the solution and it said that I should change
//onClick={setRatingNumber} to onClick={() => setRatingNumber(2)}
//maybe it was wrong from the beginning but I know it worked
