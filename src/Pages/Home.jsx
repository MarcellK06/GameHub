import React, { useEffect, useState } from "react";
import "./../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from "./../Elements/Navbar";
import kep from "./../media/s1.png";
import Popup from "../Elements/Popup";
import { FaSleigh } from "react-icons/fa6";

function Home() {
  /*
  //popuphoz szukséges
  const [popupOpen , setPopupOpen] = useState(false);

  const o = (b) => {
    setPopupOpen(!popupOpen);
  }
  useEffect(() => {
    document.querySelectorAll("button.popupClose").forEach(button => {
      button.addEventListener("click", o);
    });
 
  }, [Popup]);
  //popuphoz szükséges dolog vége
     <Popup content={<p>Hali</p>} title={"teszt"} isOpen={popupOpen}/> 
  */

  return (
    <>
      <Navbar />
     
     
    </>
  );
}
export default Home;
