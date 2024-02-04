import React, { useEffect, useState } from "react";
import "./../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from "./../Elements/Navbar";
import { FaTrashCan } from "react-icons/fa6";

function Cart() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="cart">
          <div className="row g-3">
            <div className="col-8 mb-3">
              <div className="cartitem">
                <img src="" alt="jatek kep" />
                <div>
                  <p>Jatek neve</p>
                </div>
                <div>
                  <p>Jatek rövid leirasa</p>
                </div>
                <div>
                  <p>Jatek ára</p>
                </div>
                <div>
                  <button className="btn">
                    <FaTrashCan size={25} />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="cardcolor p-3 mt-2">
                <p className="text-center fs-4">Összegzés</p>
                <hr className="mb-2 mt-2 text-light" />
                <div className="d-flex justify-content-between">
                    <p>Jatek neve</p>
                    <p>-</p>
                    <p>Jatek ara</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cart;
