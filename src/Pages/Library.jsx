import React, { useEffect, useState } from "react";
import "./../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from "../Elements/Navbar";
import kep from "./../media/s1.png";
import Popup from "../Elements/Popup";
import { FaSleigh } from "react-icons/fa6";

function Library() {

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
