import React, { useRef, useState } from "react";
import "./../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from "./../Elements/Navbar";
import TopList from "../Elements/TopList";

function Home() {
  var [a] = useState(0);
  const input = useRef();
  if (a === 1){
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

  const ConvertItem = async () => {
    const s = await convert(input.current);
    console.log(s);
  };
  return (
    <>
  <input type="file" ref={input} />
      <button onClick={ConvertItem}>Convert</button>
      </>);
  }
  return (
    <>
      <Navbar />
      <TopList />
      
    </>
  );
}

export default Home;
