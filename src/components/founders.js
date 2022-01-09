import React from "react";
import f1 from "../assets/F-1.png";
import f2 from "../assets/F-2.png";
import f3 from "../assets/F-3.png";
import "../styles/founder.css";
const Founders = () => {
  return (
    <div className="container-FS">
      <h2>founder and their story</h2>
      <div className="FS">
        <div className="text-p">
          <p>
            Groovy travels in more than just a travel company, we seek to help
            everyone to see how many amazing places there is in kuwait{" "}
          </p>
        </div>
        <div className="images">
          <div>
            <img src={f1} />
            <p>Retaj</p>
          </div>
          <div>
            <img src={f2} />
            <p>Ghezlan</p>
          </div>{" "}
          <div>
            <img src={f3} />
            <p>Jouri</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founders;
