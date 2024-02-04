import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./../style.css";
import Navbar from "./../Elements/Navbar";
import ChatBox from "../Elements/ChatBox";
import LogInToChat from "../Elements/LogInToChat";
import Cookies from "js-cookie";
import APIURL from './../APIURL.json';

function FriendsChat() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  var uid = Cookies.get("uid");
  if (uid == null)
    return (
      <>
        <Navbar />
        <div className="col-md my-1">
          <LogInToChat />
        </div>
      </>
    );
    if (loading == true){
    var friendsList = fetch(`${APIURL.apiUrl}/User/getFriendsData/${uid}`)
      .then((response) => response.json())
      .then((data) => {
        setFriends(data);
      }).catch(err => console.error(err)).finally(() => setLoading(false));
    }
  const FriendElement = ({ frienddata }) => {
    var cN = `alert-avatar ${frienddata.online ? "online_avatar" : "offline_avatar"}`
    return (
      <div className="friend"> 
        <div className="d-flex ms-2 me-2">
          <img
            src="https://tr.rbxcdn.com/38c6edcb50633730ff4cf39ac8859840/420/420/Hat/Png"
            alt=""
            className={cN}
          />
          <span className="ms-4"> {frienddata.name} ({frienddata.username})</span>
        </div>
      </div>
    );
  }; 
  const FirstFriendChat = ({ frienddata }) => { 
    if (frienddata.length > 0)
      return <ChatBox senderId={uid} receiverId={frienddata[0].uid} />;
  };
    return (
      <> 
        <Navbar />
        <div className="row g-0">
          <div className="col-md-2 friendslist">
            <h5 className="mb-3 ms-2 mt-2 text-center">Bárát lista</h5>
            <div>
              {friends.map(i => <FriendElement frienddata={i}/>)
              }
            </div> 
          </div>
          <div className="col-md">
            {<FirstFriendChat frienddata={friends}/>
            }
            <div
              className="d-flex justify-content-center"
              style={{ placeItems: "center", height: "70vh" }}
            ></div>
          </div>
        </div>
      </>
    );
  }
export default FriendsChat;
