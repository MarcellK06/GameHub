import React, { useEffect, useRef, useState } from "react";
import "./../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from "./../Elements/Navbar";
import APIURL from "./../APIURL.json";
import { useNavigate } from "react-router-dom";
import GamesItem from "../Elements/GamesItem";
function Games() {
  const searchRef = useRef(...["asd"]);
  const [searchResults, setSearchResult] = useState(["Kezdj el gépelni a kereséshez !"])
  const [categories, setCategories] = useState([]);
  const [searchInfo, setSearchInfo] = useState("Kezdj el képelni a kereséshez !");
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState([]);
  const [toShowGames, setToShowGames] = useState([]);
  const navigator = useNavigate();
  

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
  if (loading == true){
    fetch(`${APIURL.apiUrl}/Category/GetCategories`)
    .then((response) => response.json())
    .then((data) => {
      setCategories(data);    
    });
    fetch(`${APIURL.apiUrl}/Game/GetGame/0`)
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
        setToShowGames(data);
      }).finally(() => setLoading(false));
}
const setActiveCategory = (id) => {
  console.log(id);
  var toSet = games.filter((i) => i.game.categoryId == id);
  console.log(toSet);
  setToShowGames(toSet);
}
if (loading == false){
  return (
    <>
      <Navbar />
      <div className="row">
        <div className="col-md-2">
          <div
            className="categories">
            <h4 className="text-center">Kategóriák</h4>
           {categories.map(i => (
             <p className="text-center mb-2 cursor-pointer" onClick={(event) => setActiveCategory(i.id)}>{i.categoryName}</p>
          ))}
           
          </div>
        </div>
        <div className="col-md" style={{ overflowY: "scroll !important" }}>
          <div className="row">
            <div className="col-xl-9 col-sm-2"></div>
            <div className="col-xl-2 col-sm-9">
              <div className="input-group mt-4">
                <input
                  type="text"
                  className="form-control dropdown-toggle kereses"
                  name=""
                  id=""
                  placeholder="Keresés"
                  ref={searchRef}
                  data-bs-toggle="dropdown"
                  onInput={Search}
                />
                <ul className="dropdown-menu smenu">
                        {searchResults.map(i => (
                            <li onClick={() => navigator(`/game/${i.linkId}`)}>
                            <a className="dropdown-item" href="">
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
              <table>
              <div className="gamesDisplay row">
            {toShowGames.map(i => (
              <GamesItem game={i}/>
          ))}</div></table>
              </div>
            </div>
          </div>
        </div>
      </>
  );
            }
}
export default Games;
