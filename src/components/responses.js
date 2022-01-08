import React, { useState } from "react";
import activeStar from "../assets/star-active.png";

const Responses = ({ responses }) => {
  console.log("jfsldk", responses);
  return (
    <div className="all-res">
      <h4 className="mb-20">people's opinion</h4>
      {responses.map((res) => (
        <div
          className="card text-white mb-3"
          style={{ maxWidth: "18rem" }}
          key={res.id}
        >
          <div className="card-header" key={res.id}>
            {Array.from(Array(res.rate), (e, i) => (
              <div key={i} className="res-star">
                <img key={i} src={activeStar} />
              </div>
            ))}
          </div>
          <div className="card-body" key={res.id}>
            <h5 className="card-title">should we get the full mark?</h5>
            <p className="card-text">{res.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Responses;
