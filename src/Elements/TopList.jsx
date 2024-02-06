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

  if (loading === true){
    fetch(`${APIURL.apiUrl}/Game/GetGame/0`)
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
      })
      .catch((err) => console.error(err)).finally(() => setLoading(false));
  }
  if (loading === false){
    
    return (
      <>
        <div className="container">
          <div className="toplist cardcolor mt-2">
            {games.map((i) => (
              <div className="item" onClick={() => navigator(`/game/${i.linkId}`)}>
                <div>
                  <img src={i.banner} alt="" />
                </div>
                <p className=""> {i.name}</p>
              </div>
            ))}
          </div>
        </div>
      </>
    );
            }
}
export default TopList;
