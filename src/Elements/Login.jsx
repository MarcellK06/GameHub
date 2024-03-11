import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./../style.css";
import Cookies from "js-cookie";
import $ from "jquery";
import JSON from '../../backup.json';

import APIURL from "./../APIURL.json";
import { useNavigate } from "react-router-dom";
function Login() {
  class ResponseMessage {
    constructor(message, type) {
      this.type = type;
      switch (type) {
        case "ALERT":
          this.message = <p className="text-alert">{message}</p>;
          break;
        case "DANGER":
          this.message = <p className="text-danger">{message}</p>;
          break;
        case "SUCCESS":
          this.message = <p className="text-success">{message}</p>;
          break;
        default:
          console.error("");
      }
    }
  }
  const [responseMessage, setResponseMessage] = useState();
  const [content, setContent] = useState();
  const username = useRef();
  const password = useRef();


  const email = useRef();
  const name = useRef();
  


  const navigator = useNavigate();

  var backup = true;
  const login = () => {
    setResponseMessage(null);
    const _username = username.current.value;
    const _password = password.current.value;

    if(backup){
        var user = JSON[0].users.find(i => i.username == _username);
        if(user != null) {
          if(user.password == _password){
            Cookies.set("uid", JSON[0].users.indexOf(user));
            Cookies.set("username", _username);
          }
        }

        return window.alert('Sikertelen bejelenthezés !');
    } 
    return;
    if (_username.length == 0 || _password.length == 0) {
      return setResponseMessage(
        new ResponseMessage("Hiányzó adatok", "DANGER")
      );
    }
    const ldata = {
      username: _username,
      email: _username,
      password: _password,
    };
    try {
      $.ajax({
        type: "POST",
        url: `${APIURL.apiUrl}/User/login`,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(ldata),
        success: function (response) {
          Cookies.set("uid", response.id);
          Cookies.set("username", response.username);
          window.location.reload();
        },
      });
    } catch (ex) {
      console.error(ex);
      setResponseMessage(
        new ResponseMessage("Sikertelen bejelentkezés !", "DANGER")
      );
    }
  };
  useEffect(() => {
        setContent(loginH);
  }, [navigator])

  const registerH = () => {
    return(
    <>
      <div className="login">
      <label className="text-light mb-2  mt-3">
          Email
        </label>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control custom-btn text-black"
            ref={email}
            
          />
        </div>
        <label className="text-light mb-2  mt-3">
          Név
        </label>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control custom-btn text-black"
            ref={name}
            
          />
        </div>
        <label className="text-light mb-2  mt-3">
          Felhasználónév
        </label>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control custom-btn text-black"
            ref={username}
          />
        </div>
        <label className="text-light mb-2">Jelszó</label>
        <div className="input-group mb-3">
          <input
            type="password"
            className="form-control custom-btn text-black"
            ref={password}
          />
        </div>
        <p className="text-center">
          {" "}
          {responseMessage == null ? "" : responseMessage.message}
        </p>
        <div className="input-group mb-3">
          <button
            className="form-control backround-main custom-btn"
            onClick={REGISTER}>
            Regisztráció
          </button>
        </div>
        <div className="d-flex justify-content-center">
          <p className="text-main">Már van fiókom</p>
        </div>
      </div>
    </>
    )
  }
  const REGISTER = () => {
    const _username = username.current.value;
    const _password = password.current.value;
    const _name = name.current.value;
    const _email = email.current.value;
    if(_username.length == 0 || _password.length == 0 || _name.length == 0 | _email.length == 0){
      return setResponseMessage(
        new ResponseMessage("Hiányzó adatok !", "DANGER")
      );
    }
    const data = {
      "name": _name,
      "username": _username,
      "email": _email,
      "password": _password,
      "avatar": " "
    }
    try {
      $.ajax({
        type: "POST",
        url: `${APIURL.apiUrl}/User/register`,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(data),
        success: function (response) {
          Cookies.set("uid", response.id);
          Cookies.set("username", response.username);
          window.location.reload();
        },
        error: function (response) {
          setResponseMessage(
            new ResponseMessage("Sikertelen bejelentkezés !", "DANGER")
          );
        },
      });
    } catch (ex) {
      console.error(ex);
    }



  }
  const openReg = () => {
      setContent(registerH);
      document.getElementById("popuptitle").innerHTML = "Regisztráció";
      document.getElementById("popup").style.top = "10%";
  }
  const loginH = () => {
    return (<>
    <div className="login">
        <label className="text-light mb-2  mt-3">
          Felhasználónév vagy email
        </label>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control custom-btn text-black"
            ref={username}
          />
        </div>
        <label className="text-light mb-2">Jelszó</label>
        <div className="input-group mb-3">
          <input
            type="password"
            className="form-control custom-btn text-black"
            ref={password}
          />
        </div>
        <p className="text-center">
          {" "}
          {responseMessage == null ? "" : responseMessage.message}
        </p>
        <div className="input-group mb-3">
          <button
            className="form-control backround-main custom-btn"
            onClick={login}>
            Bejelentkezés
          </button>
        </div>
        <div className="d-flex justify-content-between">
          <p className="text-main">Elfelejtettem a jelszavamat!</p>
          <p className="text-main" onClick={openReg}>Még nincs fiókom</p>
        </div>
      </div>
      </>)
  }
  return (
    <>
      {content}
    </>
  );
}
export default Login;
