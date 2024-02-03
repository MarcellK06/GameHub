import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { PiListBold } from "react-icons/pi";
import { FaPen } from "react-icons/fa6";
import "./../style.css";
function ChatBox({ senderId, receiverId }) {
  const messageRef = useRef();
  const [sentMessages, setSentMessages] = useState([]);

  const SENDMESSAGE = (message) => {
    //TODO
  };
  const send = () => {
    const newMessage = messageRef.current.value;
    if (newMessage.trim() !== "") {
      setSentMessages((prevMessages) => [...prevMessages, newMessage]);
      SENDMESSAGE(newMessage);
      messageRef.current.value = "";
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        const newMessage = messageRef.current.value;
        if (newMessage.trim() !== "") {
          setSentMessages((prevMessages) => [...prevMessages, newMessage]);
          SENDMESSAGE(newMessage);
          messageRef.current.value = "";
        }
      }
    });
  });
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
              {sentMessages.map((i) => (
                <>
                  <p className="text-secondary date me-3">Ma {new Date().toISOString().split('T')[1].split('.')[0]}</p>
                  <div className="message">{i}</div>
                </>
              ))}
            </div>
          </div>
        </div>
        <div className="inputs text-center">
          <div className="d-flex">
            <div className="input-group ">
              <input
                type="text"
                className="form-control text-light"
                ref={messageRef}
                placeholder="Aa"
              />
            </div>
            <div className="input-group ms-4">
              <button className="btn btn-primary" onClick={send}>
                Küldés
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ChatBox;
