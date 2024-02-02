import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { PiListBold } from "react-icons/pi";
import "./../style.css";
function ChatBox({ senderId, receiverId }) {
  return (
    <>
      <div className="chatbox">
        <div className="header d-flex">
          <img
            src="https://tr.rbxcdn.com/38c6edcb50633730ff4cf39ac8859840/420/420/Hat/Png"
            alt=""
            className="chat-avatar"
          />
          <div className="ms-auto">
            <span className="text-center ms-2 text-center">Paragh Tibor</span>
            <br />
            <span className="ms-2">Jelenleg online</span>
            <span className="online"></span>
          </div>
          <div className="ms-auto">
            <PiListBold size={30} />
          </div>
        </div>
        <div className="chat container mt-1">
          <div className="receiver d-flex justify-content-start">
            <div className="message">Cső haver, mizu?</div>
          </div>
          <div className="sender d-flex justify-content-end">
            <div className="">
              <div className="message">Szia! 😉</div>
            </div>
          </div>
        </div>
        <div className="inputs text-center">
          <div className="d-flex">
            <div className="input-group ">
              <input type="text" className="form-control text-light" placeholder="Aa"/>
            </div>
            <div className="input-group ms-4">
              <button className="btn btn-primary">Küldés</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ChatBox;
