import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./../style.css";
import Cookies from "js-cookie";
import $ from "jquery";

import APIURL from "./../APIURL.json";
function Login() {
    class ResponseMessage{
        constructor(message, type){
            this.type = type;
            switch(type){
               case "ALERT": this.message = <p className="text-alert">{message}</p>;
               break;
               case "DANGER":  this.message = <p className="text-danger">{message}</p>;
               break;
               case "SUCCESS":  this.message = <p className="text-success">{message}</p>;
               break;
               default: console.error("");
            }          
        }
    }
    const [responseMessage, setResponseMessage] = useState();
    const username = useRef();
    const password = useRef();
    const login = () => {
        setResponseMessage(null);
        const _username = username.current.value;
        const _password = password.current.value;
        if(_username.length == 0 || _password.length == 0){
            return setResponseMessage(new ResponseMessage("Hiányzó adatok", "DANGER"))
        }
        const ldata = {"username": _username, "email": _username, "password": _password} 
        try {
            $.ajax({
              type: "POST",
              url: `${APIURL.apiUrl}/User/login`,
              dataType: "json",  
              contentType: "application/json; charset=utf-8",
              data:  JSON.stringify(ldata),
              success: function (response) {
                Cookies.set("uid", response.id)
                Cookies.set("username", response.username)
                window.location.reload();
              },
              error: function (response) {
                setResponseMessage(new ResponseMessage("Sikertelen bejelentkezés !", "DANGER"))
             }
            });
          } catch (ex) {
            console.error(ex);
          }    
    }
  return (
    <>
      <label className="text-light mb-2 ms-1 mt-3">
        Felhasználónév vagy email
      </label>
      <div className="input-group mb-3">
        <input type="text" className="form-control custom-btn text-black" ref={username} />
      </div>
      <label className="text-light mb-2 ms-1">Jelszó</label>
      <div className="input-group mb-3">
        <input type="password" className="form-control custom-btn text-black" ref={password} />
      </div>
    <p className="text-center">  {responseMessage == null ? "" : responseMessage.message}</p>
      <div className="input-group mb-3">
        <button
          className="form-control backround-main custom-btn"
          onClick={login}>
          Bejelentkezés
        </button>
      </div>
      <div className="d-flex justify-content-between">
        <p className="text-main">Elfelejtettem a jelszavamat!</p>
        <p className="text-main">Még nincs fiókom</p>
      </div>
    </>
  );
}
export default Login;
