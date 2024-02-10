import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./../style.css";
import loginPng from "./../media/login.png";
import { useNavigate } from "react-router-dom";
import { useLocation, Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import Popup from "./Popup";
import Cookies from "js-cookie";
import Login from "./Login";
import { MdShoppingCart } from "react-icons/md";
import APIURL from "../APIURL.json";
import Icon from "../media/gamehub_logo_nbg";

function Home() {
  class NavLink {
    constructor(id, name, path, pageTitle) {
      this.id = id;
      this.name = name;
      this.path = path;
      this.pageTitle = pageTitle;
    }
  }
  const location = useLocation();
  const navigator = useNavigate();

  const navLink = [
    new NavLink(1, "Home", "/", "GameHub Főoldal"),
    new NavLink(2, "támogatás", "/tamogatas", "GameHub  Támogatás"),
    new NavLink(3, "Könyvtár", "/library", "GameHub Könyvtár"),
    new NavLink(4, "barátok", "/friends", "GameHub Barátok"),
    new NavLink(5, "Játékok", "/games", "GameHub Játékok"),
  ];
  useEffect(() => {
    try {
      document.title = navLink.find(
        (i) => i.path == location.pathname
      ).pageTitle;
    } catch (err) {}
  }, [navigator]);
  //popup
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState();
  const [popupTitle, setPopupTitle] = useState();
  const [cartinfo, setcartinfo] = useState([]);
  useEffect(() => {
    if (Cookies.get("uid") == null) return;
    try {
      fetch(`${APIURL.apiUrl}/Cart/getUserCartTotal/${Cookies.get("uid")}`)
        .then((response) => response.json())
        .then((data) => {
          setcartinfo(data);
        })
        .catch((err) => console.error(err));
    } catch (err) {}
  }, []);

  const o = (b) => {
    setPopupOpen(!popupOpen);
  };
  useEffect(() => {
    document.querySelectorAll("button.popupClose").forEach((button) => {
      button.addEventListener("click", o);
    });
  }, [Popup]);

  const logout = () => {
    Cookies.remove("uid");
    Cookies.remove("username");
    window.location.reload();
  };
  const toggleLoginPopup = () => {
    if (Cookies.get("uid") != null) {
      return;
    }

    setPopupTitle("Bejelentkezés");
    setPopupOpen(!popupOpen);
    setPopupContent(<Login />);
  };
  return (
    <>
      <Popup content={popupContent} title={popupTitle} isOpen={popupOpen} />
      <div className="nav">
        <div className="container">
          <div className="login_info d-flex justify-content-between mt-3">
            <p className="email">
              <FaEnvelope className="me-2" />
              info@gamehub.hu
            </p>
            <div className="d-flex">
              <div onClick={() => {
                if(Cookies.get("uid") != null){
                  navigator("/profile")
                }
              }}>
                <p className="login" onClick={toggleLoginPopup}>
                  <img src={loginPng} alt="" className="me-2" />
                  {Cookies.get("username") != null
                    ? Cookies.get("username")
                    : "Bejelentkezés"}
                </p>
              </div>
              <button
                className="custom-btn backround-main ms-4"
                onClick={logout}
                style={{
                  marginTop: "-1px",
                  height: "30px",
                  display: Cookies.get("uid") != null ? "block" : "none",
                }}>
                Kijelentkezés
              </button>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <a className="navbar-brand" href="/">
            <Icon className="logo"/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {navLink.map((i) => (
                  <li className="nav-item">
                    <Link
                      className={`nav-link  ${
                        location.pathname == i.path ? "navActive" : ""
                      }`}
                      to={i.path}>
                      {i.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="ms-auto d-flex">
              <div className="dropdown">
                <button
                  className="btn  dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  <FaBell size={22} className="" />
                  <span className="bellcount">9+</span>
                </button>

                <div className="dropdown-menu alert-dd ">
                  <div className="alert-item p-3">
                    <div className="d-flex justify-content-between">
                      Bárát felkérés érkezett tőle: tibor_paragh{" "}
                      {/*név max 12 karakter pl 123456789111... */}
                      <img
                        src="https://tr.rbxcdn.com/38c6edcb50633730ff4cf39ac8859840/420/420/Hat/Png"
                        alt=""
                        className="alert-avatar"
                      />
                    </div>
                    <p className="text-secondary">Ma 13:23-kor</p>
                  </div>
                  <div className="alert-item p-3">
                    <div className="d-flex justify-content-between">
                      tibor_paragh, üzent neked.
                      <img
                        src="https://tr.rbxcdn.com/38c6edcb50633730ff4cf39ac8859840/420/420/Hat/Png"
                        alt=""
                        className="alert-avatar"
                      />
                    </div>
                    <p className="text-secondary">Ma 13:23-kor</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="carticon" onClick={() => navigator("/cart")}>
                  <MdShoppingCart size={25} />
                  <span className="cartcount bg-warning">
                    {Cookies.get("uid") == null ? "0" : cartinfo[0]}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Home;
