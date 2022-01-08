import "./App.css";
import { Button } from "react-bootstrap";
import NavBar from "./components/nav";
import Header from "./components/header";
import FeedBack from "./components/feedback";
import Places from "./components/places";
import CustomerRes from "./components/customer-res";
import Founders from "./components/founders";
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  let [responsesREQ, setRes] = useState(null);
  const getResponses = () => {
    axios.get("https://travel-epp.herokuapp.com/feedback/").then((rawRes) => {
      let res = rawRes.data;
      console.log(res);
      setRes(res);
    });
  };
  useEffect(() => {
    getResponses();
  }, []);
  return (
    <div className="contanier m-2 app">
      <NavBar />
      <Header />
      <FeedBack />
      <Places />
      {responsesREQ ? <CustomerRes responses={responsesREQ} /> : <></>}
      <Founders />
    </div>
  );
}

export default App;
//#afb6c2
