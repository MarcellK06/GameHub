import React, { useEffect, useRef, useState } from "react";
import "./../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from "./../Elements/Navbar";
import kep from "./../media/s1.png";
import Popup from "../Elements/Popup";
import { FaSleigh } from "react-icons/fa6";
import APIURL from "./../APIURL.json";
import TopList from "../Elements/TopList";

function Home() {
  /*
  function convert(input) {
    return new Promise((resolve) => {
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
          var base64String = e.target.result;
          resolve(base64String);
        };
        reader.readAsDataURL(input.files[0]);
      }
    });
  }

  const input = useRef();
  const ConvertItem = async () => {
    const s = await convert(input.current);
    console.log(s);
  };
  <input type="file" ref={input} />
      <button onClick={ConvertItem}>Convert</button>
  */

  return (
    <>
      <Navbar />
      <TopList />
      
    </>
  );
}

export default Home;
