import React, { useState } from "react";
import "../styles/feedback.css";
import activeStar from "../assets/star-active.png";
import inactiveStar from "../assets/star-inactive.png";
import axios from "axios";

let starsArray = [
  { id: 1, active: false },
  { id: 2, active: false },
  { id: 3, active: false },
  { id: 4, active: false },
  { id: 5, active: false },
];
const FeedBack = () => {
  const [stars, setStars] = useState(starsArray);
  const [feedbackText, setFeedbackText] = useState("");
  const [error, setError] = useState();
  // variables
  const handleStarsChange = (id) => {
    let newStars = stars.map((star) =>
      star.id <= id ? { ...star, active: true } : { ...star, active: false }
    );
    setStars(newStars);
  };
  const handleSubmit = (event, text) => {
    event.preventDefault();
    const rates = stars.filter((star) => star.active == true);
    if (!rates || rates == [] || !text || text == "") {
      setError("fill every input");
    } else {
      setError("");
      let rate = rates.slice(rates.length - 1)[0].id || 5;
      const fd = { rate, text };
      axios
        .post("https://travel-epp.herokuapp.com/feedback/send", fd)
        .then(() => {
          console.log("yay");
          window.location.reload();
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <form>
      <div className="feedback">
        <h2>What do you think of us 😍</h2>
        <div className="star-container">
          {stars.map((item) => (
            <div
              key={item.id}
              onClick={() => handleStarsChange(item.id)}
              className="star"
            >
              <img
                key={item.id}
                src={item.active ? activeStar : inactiveStar}
              />
            </div>
          ))}
        </div>
        <input
          className="feedback-input"
          type="text"
          value={feedbackText}
          onChange={(event) => setFeedbackText(event.target.value)}
          placeholder="  Should we get the full mark?"
        />
        <p style={{ color: "red" }}>{error}</p>
        <button
          className="feedbackButton"
          onClick={(event) => handleSubmit(event, feedbackText)}
        >
          submit
        </button>
      </div>
    </form>
  );
};

export default FeedBack;
