import React, { useRef, useState } from "react";
import "./../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from "./../Elements/Navbar";
function Games() {
  return (
    <>
      <Navbar />
      <div className="row">
        <div className="col-md-2">
          <div
            className="cardcolor categories"
            style={{ height: "100vh", overflowY: "scroll" }}>
            <h4 className="text-center">Kategóriák</h4>
            <p className="text-center mb-2">Akció</p>
            <p className="text-center mb-2">Akció</p>
            <p className="text-center mb-2">Akció</p>
            <p className="text-center mb-2">Akció</p>
            <p className="text-center mb-2">Akció</p>
            <p className="text-center mb-2">Akció</p>
          </div>
        </div>
        <div className="col-md">
          <div className="row">
            <div className="col-9"></div>
            <div className="col-2">
              <div className="input-group mt-4">
                <input
                  type="text"
                  className="form-control"
                  name=""
                  id=""
                  placeholder="Keresés"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Games;
