import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./../style.css";
import Navbar from "./../Elements/Navbar";
import ChatBox from "../Elements/ChatBox";

function FriendsChat() {
  return (
    <>
      <Navbar />
      <div className="row g-0">
        <div className="col-md-2 friendslist">
          <h5 className="mb-3 ms-2 mt-2 text-center">Bárát lista</h5>
          <div>
          <div className="friend ">
            <div className="d-flex  ms-2 me-2">
              <img
                src="https://tr.rbxcdn.com/38c6edcb50633730ff4cf39ac8859840/420/420/Hat/Png"
                alt=""
                className="alert-avatar offline_avatar"
              />
                <span className="ms-4">  Paragh Tibor (tibor_paragh)</span>
            </div>
          </div>
          <div className="friend">
            <div className="d-flex ms-2 me-2">
              <img
                src="https://tr.rbxcdn.com/38c6edcb50633730ff4cf39ac8859840/420/420/Hat/Png"
                alt=""
                className="alert-avatar online_avatar"
              />
            <span className="ms-4"> Teszt elek (elek_teszt)</span>
            </div>
          </div>

          </div>
        
        </div>
        <div className="col-md">
          <ChatBox senderId={0} receiverId={0} />
          <div
            className="d-flex justify-content-center"
            style={{ placeItems: "center", height: "70vh" }}></div>
        </div>
      </div>
    </>
  );
}
export default FriendsChat;
