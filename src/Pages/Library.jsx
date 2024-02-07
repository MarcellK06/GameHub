import React, { useEffect, useState } from "react";
import "./../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from "../Elements/Navbar";
import kep from "./../media/s1.png";
import Popup from "../Elements/Popup";
import { FaSleigh } from "react-icons/fa6";
import APIURL from './../APIURL.json';
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function Library() {
  const [library, setLibrary] = useState([]);
  const navigator = useNavigate();
  var uid = Cookies.get("uid");
  useEffect(() => {
    if(uid == null){
      return;
    }
    fetch(`${APIURL.apiUrl}/Library/GetLibraryItems/${uid}`)
        .then((response) => response.json())
        .then((data) => {
            setLibrary(data);
            console.log(data);
        })    

  }, [])
  return (
    <>
      <Navbar />
     
      <div className="row g-0">
        <div className="col-md-2 gameslist">
        </div>
      </div>
     
    </>
  );
}
export default Library;
