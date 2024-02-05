import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./../style.css";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

function Popup({ content, title, isOpen }) {
  const [iopen, seto] = useState(isOpen);
  useEffect(() => {
    seto(isOpen);
  }, [isOpen]);
  const onClose = () => {
    seto(false);
  };
  function generateRandomString(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  return (
    <div style={{ display: iopen ? "block" : "none" }} key={generateRandomString(10)}>
      <div className="blur">
        {" "}
        <br />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="popup" id="popup">
        <div className="d-flex justify-content-between">
          <p className="fs-4" id="popuptitle">{title}</p>
          <button className="popupClose btn" onClick={onClose}>
            <IoMdClose size={30} className="close" />
          </button>
        </div>
        {content}
      </motion.div>
    </div>
  );
}
export default Popup;
