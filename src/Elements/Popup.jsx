import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./../style.css";

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
      <div className="blur"></div>
      <div className="popup">
        <div className="d-flex justify-content-between">
            {title}
            <button className="btn btn-close text-light popupClose" onClick={onClose}></button>
        </div>
        {content}
      </div>
    </div>
  );
}
export default Popup;
