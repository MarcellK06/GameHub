import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./../style.css";
import { IoMdClose } from "react-icons/io";

function Popup({ content, title, isOpen}) {
    const [iopen, seto] = useState(isOpen)
    useEffect(() => {
        seto(isOpen);
    },[isOpen])
    const onClose = () => {
        seto(false);
    }
  return (
    <div style={{ display: iopen ? "block" : "none" }}>
      <div className="blur"> <br /></div>
      <div className="popup">
        <div className="d-flex justify-content-between">
           <p className="fs-4">{title}</p>
            <button className="popupClose btn" onClick={onClose}>
            <IoMdClose size={30}  className="close"/>
            </button>
        </div>
        {content}
      </div>
    </div>
  );
}
export default Popup;
