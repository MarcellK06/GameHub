import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { PiListBold } from "react-icons/pi";
import "./../style.css";
function LogInToView() {

  return (
    <>
      <div className="gameitem">
        <div className="header d-flex cardcolor p-2 mt-1">
          <div className="ms-auto">
            <span className="text-center ms-2 ">Jelentkezz be hogy megtekinthesd a tartalmat.</span>
          </div>
          <div className="ms-auto">
          </div>
        </div>
      </div>
    </>
  );
}
export default LogInToView;
