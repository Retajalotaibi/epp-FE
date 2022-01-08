import React from "react";

import "../styles/customer-res.css";
import Customer from "./customer";
import Responses from "./responses";
const CustomerRes = ({ responses }) => {
  return (
    <div className="cus-res">
      <Customer />
      <Responses responses={responses} />
    </div>
  );
};

export default CustomerRes;
