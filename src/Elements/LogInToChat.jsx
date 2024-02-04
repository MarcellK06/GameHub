import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { PiListBold } from "react-icons/pi";
import "./../style.css";
function LogInToChat() {

  return (
    <>
      <div className="chatbox">
        <div className="header d-flex">
          <div className="ms-auto">
            <span className="text-center ms-2">Jelentkezzen be a csevegéshez.</span>
          </div>
          <div className="ms-auto">
          </div>
        </div>
      </div>
    </>
  );
}
export default LogInToChat;
