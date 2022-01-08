import React from "react";
import "../styles/places.css";
import mindmaze from "../assets/Mindmaze.jpeg";
import Sirbb_Circuit from "../assets/Sirbb_Circuit.jpeg";
import Escape_Room from "../assets/Escape_Room.jpeg";
let places = [
  {
    id: 1,
    img: mindmaze,
    description:
      " Have you heard about the escaping room games? well, if you want to try one you can enjoy playing this game at Mindmaze. This place located at Al Tilal Complex, Shuwaikh.",
  },
  {
    id: 2,
    img: Sirbb_Circuit,
    description:
      "One reason that people should visit the Sirbb circuit is to develop the youth talents in a safe manner. Another reason is that citizens should encourage entertainment in Kuwait and perform professional driving and racing experience.",
  },
  {
    id: 3,
    img: Escape_Room,
    description:
      "Today we are going to talk about an escape room, do you know what it is?  One of the most important and wonderful entertainment centers located in Kuwait City, as it is known to be the room escape game. ",
  },
];
function Places() {
  return (
    <div className="places-container">
      <h2>where you can go with us</h2>
      {places.map((place) => (
        <div className="card" style={{ width: "18rem" }} key={place.id}>
          <img className="card-img-top" src={place.img} alt="Card image cap" />
          <div className="card-body">
            <p className="card-text">{place.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Places;
