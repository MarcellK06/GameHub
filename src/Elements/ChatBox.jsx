import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { PiListBold } from "react-icons/pi";
import { FaPen } from "react-icons/fa6";
import "./../style.css";
import "./../chatstyle.css";

import APIURL from './../APIURL.json';
function ChatBox({ senderId, receiverId }) {
  const messageRef = useRef();
  const [receiverData, setReceiverData] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [lastLength, setLastLength] = useState(0);

  const loadMessages = () => {
  
  fetch(`${APIURL.apiUrl}/Chat/getMessagesWithUser/${senderId}/${receiverId}`).then((response) => response.json()).then((data) => {
    setMessages(data);
  });
}

  const SENDMESSAGE = (message) => { //MÉG NEM MŰKÖDIK!
    fetch(`${APIURL.apiUrl}/Chat/sendMessage/${senderId}/${receiverId}/${message}`).catch(e => console.error(e)).finally(() => {
      console.log("successfully sent message.");
      loadMessages();
  });
  };
  const send = () => {
    const newMessage = messageRef.current.value;
    if (newMessage.trim() !== "") {
      SENDMESSAGE(newMessage);
      messageRef.current.value = "";
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        const newMessage = messageRef.current.value;
        if (newMessage.trim() !== "") {
          SENDMESSAGE(newMessage);
          messageRef.current.value = "";
        }
      }
    });
  });
  if (loaded == false) {
    fetch(`${APIURL.apiUrl}/User/getUserById/${receiverId}`)
      .then((response) => response.json())
      .then((data) => {
        setReceiverData(data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoaded(true);
      });

      loadMessages();
  }
  const SenderMessage = (messageData) => {
    messageData = messageData.messageData;
    var dt = new Date(messageData.messageSent);
    return (
    <div className="sender d-flex justify-content-end">
            <div className="">
                <>
                  <p className="text-secondary date me-3">
                    Ma {`${dt.toDateString()} ${dt.toTimeString().split(' G')[0]}`}
                  </p>
                  <div className="message">{messageData.messageBody}</div>
                </>
            </div>
          </div>
    )
  }
  const ReceiverMessage = (messageData) => {
    messageData = messageData.messageData;
    var dt = new Date(messageData.messageSent);
    return (
    <div className="receiver d-flex justify-content-start">
      <div>
      <p className="text-secondary date me-3">
                    Ma {`${dt.toDateString()} ${dt.toTimeString().split(' G')[0]}`}
                  </p>
    <div className="message">{messageData.messageBody}</div>
    </div>
    </div>
    )
  } 
  setTimeout(() => {
    loadMessages();
    if (lastLength != messages.length){
    document.getElementById('chat').scrollTop = document.getElementById('chat').scrollHeight;
    setLastLength(messages.length);
  }
}, 75)
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
            <span className="text-center ms-2">{receiverData.name}</span>
            <br />
            <span className="ms-2">
              Jelenleg {receiverData.online ? "online" : "offline"}
            </span>
            <span className={receiverData.online ? "online" : "offline"}></span>
          </div>
          <div className="ms-auto">
            <PiListBold size={30} />
          </div>
        </div>
        <div className="chat container mt-1" id="chat">
          {messages.map(i => i.senderId == senderId ? <SenderMessage messageData={i}/> : <ReceiverMessage messageData={i}/>)}
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
