import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./../style.css";
import APIURL from "./../APIURL.json";

function TopList() {
  const [games, setGames] = useState([]);
  const navigator = useNavigate();
  var [loading, setLoading] = useState(true);
  const [currentSelected, setCurrentSelected] = useState(0);
  const [inFocus, setInFocus] = useState(0);

  const nextCurrentSelected = () => {
    if (currentSelected < document.getElementsByClassName("validitem").length-1){
    setCurrentSelected(currentSelected + 1);
    }
  }
  const previousCurrentSelected = () => {
    if (currentSelected > 0){
    setCurrentSelected(currentSelected - 1);
    }
  }

  if (loading === true){
    fetch(`${APIURL.apiUrl}/Game/GetGame/0`)
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
      })
      .catch((err) => console.error(err)).finally(() => setLoading(false));
  }
  if (inFocus != currentSelected)
  {
    document.getElementById(`game${currentSelected}`).scrollIntoView({inline:"center", behavior:"smooth"});
    setInFocus(currentSelected);
  }
  if (loading === false){
    
    return (
      <>
        <div className="container">
            <div className="toplisttitle">Kiemelt</div>
            <button onClick={previousCurrentSelected}>a</button>
            <button onClick={nextCurrentSelected}>b</button>
          <div className="toplist cardcolor mt-2">
            <div className="scroller">
              <div className="item spacerl"> {/*SPACER*/}
                <div>
                </div>
                <p className="shopGameName"></p>
              </div>
          {games.map((i, idx) => (
              <div className="validitem item" id={`game${idx}`} onClick={() => navigator(`/game/${i.linkId}`)}>
                <div>
                  <img className="shopGameBanner" src={i.banner} alt="" />
                </div>
                <p className="shopGameName"> {i.name}</p>
              </div>
            ))}
            <div className="item spacerr"> {/*SPACER*/}
              <div>
              </div>
              <p className="shopGameName"></p>
            </div>
            </div>
          </div>
        </div>
      </>
    );
            }
}
export default TopList;
