import React, { useEffect, useState } from "react";
import "./../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from "./../Elements/Navbar";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import APIURL from "./../APIURL.json";
import { BsPersonGear } from "react-icons/bs";
import { MdOutlinePayments } from "react-icons/md";

function Profile() {
  const navigator = useNavigate();
  const [Content, setContent] = useState(null);
  const [user, setUser] = useState([]);

  useEffect(() => {
    if (Cookies.get("uid") == null) {
      navigator("/");
      return;
    }
    document.title = "Profil";
    fetch(`${APIURL.apiUrl}/User/getUserById/${Cookies.get("uid")}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  }, [navigator]);


  useEffect(() => {
    if (user && user.name) {
      setContent(<Welcome />);
    }
  }, [user]);

  const Welcome = () => {
     return(
     <>
     <div className="d-flex justify-content-center profile">
        <div>
        <div className="d-flex">
            {user.avatar.length == 0 ?
             <div className="noppfp">
                <p>{user.name.split(' ').length > 1 ? user.name.split(' ')[0][0] + user.name.split(' ')[1][0] : user.name[0]}</p>
            </div> :    <img src={user.avatar} className="avatar" alt="" />}
        
            <h4 className="mt-5 ms-4">{user.name} ({user.username})</h4>
        </div>
        <div className="cardcolor mt-5 pt-3 pb-1 pe-2 ps-2">
         <p className="mt-1">  Fiókodat létrehoztad: {user.created_at.split('T').join(' ').split(".")[0]}</p>
        </div>
        <div className="cardcolor cardcolor mt-2 pt-3 pb-1 pe-2 ps-2">
         <p className="mt-1">  Email: {user.email}</p>
        </div>
        </div>   
     </div>
     </>
     )
  };

  return (
    <>
      <Navbar />
      <div className="profile">
        <div className="row">
          <div className="col-md-3">
            <div className="cardcolor p-4 ms-5 mt-5">
              <div className="cursor-pointer prfileedit">
                <div className="row">
                  <div className="col-2">
                    <BsPersonGear size={30} />
                  </div>
                  <div className="col">
                    <p className="text-center">
                      Felhasználói profil szerkesztése
                    </p>
                  </div>
                </div>
              </div>
              <div className="cursor-pointer prfileedit">
                <div className="row">
                  <div className="col-2">
                    <MdOutlinePayments size={30} className="mt-1" />
                  </div>
                  <div className="col">
                    <p className="text-center">Vásárlásaim</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="mt-5">{Content}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
