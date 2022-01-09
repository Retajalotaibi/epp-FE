import React from "react";
import avatar from "../assets/ghadder.png";
const Customer = () => {
  return (
    <div className="cus-container">
      <div className="cus-info">
        <img src={avatar} />
        <h3>Nour</h3>
      </div>
      <p>
        Hello I'm Nour, I went to Kuwait for the first time in 2021 and I chose
        Grrovly Travels to be my guaid in my trip, My experience was amazing I
        got to go to super interesting places, I really liked the up saide down
        house it had a really nice Kuwaiti touch, And the stuff were absolutely
        amazing, if you are planning to visit Kuwait you should go with groovy
        travles !
      </p>
    </div>
  );
};

export default Customer;
