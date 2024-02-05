import React, { useEffect, useState } from "react";
import "./../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from "./../Elements/Navbar";
import kep from "./../media/s1.png";
import Popup from "../Elements/Popup";
import { FaSleigh } from "react-icons/fa6";
import APIURL from "./../APIURL.json";

function Home() {

  // IDEIGLENESEN ITT VAN
  const [games, setGames] = useState([]);
  
  useEffect(() => {
    fetch(`${APIURL.apiUrl}/Game/GetGame/1`)
    .then((response) => response.json())
    .then((data) => {
      setGames(data);
    })
    .catch(err => console.error(err));
  },[]);

  return (
    <>
      <Navbar />
      <img src={games.banner} alt="" />
    </>
  );
}

export default Home;
