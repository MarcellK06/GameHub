import React, { useEffect, useRef, useState } from "react";
import "./../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from "./../Elements/Navbar";
import APIURL from "./../APIURL.json";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
function Games() {
  const searchRef = useRef(...["asd"]);
  const [searchResults, setSearchResult] = useState(["Kezdj el gépelni a kereséshez !"])
  const [categories, setCategories] = useState([]);
  const [searchInfo, setSearchInfo] = useState("Kezdj el képelni a kereséshez !");
  const navigator = useNavigate();
  const addGameToCart = (id) => {
    const uid = Cookies.get("uid");
    if(uid == null) return window.alert("Ehhez bejelentkezés szükséges!")
    const data = {
      "userId": uid,
      "gameId": id
    }
    $.ajax({
      type:"PUT",
      url: `${APIURL.apiUrl}/Cart/AddCartItem`,
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(data),
      success: function(res) {
        window.location.reload();
      },
      error: function (res) {
        console.log(res);
      },
    })
  }

  const Search = () => {
    const _svalue = searchRef.current.value;

    if (_svalue.length >= 3) {
      fetch(`${APIURL.apiUrl}/Game/searchGame/${_svalue}`)
      .then((response) => response.json())
      .then((data) => {
        setSearchResult(data); 
        setSearchInfo(data.length == 0 ? "A játék nem található !" : "");
      });
    } else if(_svalue.length < 3 && _svalue.length != 0) {
      setSearchResult([]);
      setSearchInfo("A kereséshez minimum 3 karakter szükséges !");
    } else {
      setSearchInfo("Kezdj el képelni a kereséshez !");
    }
  };
  useEffect(() => {
    fetch(`${APIURL.apiUrl}/Category/GetCategories`)
    .then((response) => response.json())
    .then((data) => {
      setCategories(data);    
    });
  }, [])
  return (
    <>
      <Navbar />
      <div className="row">
        <div className="col-md-2">
          <div
            className="categories"
            style={{ height: "100vh", overflowY: "scroll" }}>
            <h4 className="text-center">Kategóriák</h4>
           {categories.map(i => (
             <p className="text-center mb-2 cursor-pointer">{i.categoryName}</p>
          ))}
           
          </div>
        </div>
        <div className="col-md" style={{ overflowY: "scroll !important" }}>
          <div className="row">
            <div className="col-9"></div>
            <div className="col-2">
              <div className="input-group mt-4">
                <input
                  type="text"
                  className="form-control dropdown-toggle"
                  name=""
                  id=""
                  placeholder="Keresés"
                  ref={searchRef}
                  data-bs-toggle="dropdown"
                  onInput={Search}
                />
                <ul class="dropdown-menu">
                        {searchResults.map(i => (
                            <li onClick={() => navigator(`/game/${i.linkId}`)}>
                            <a class="dropdown-item" href="">
                             {i.name}
                            </a>
                          </li>
                        ))}
                        <li><a href="" className="dropdown-item"> {searchInfo}</a></li>                
                </ul>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="row g-0">
            <div className="col">
              <div className="game">
                <div className="d-flex justify-content-center">
                  <img
                    src="https://cdkeyprices.uk/images/games/5659464/grand-theft-auto-v-desktop-logo-all.jpg"
                    alt="<game-name>-banner"
                  />
                </div>
                <p className="gamename text-center mt-3">GTA V</p>
                <p className="price">15 ft</p>
                <button className="custom-btn btn w-100">Kosárba</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Games;
