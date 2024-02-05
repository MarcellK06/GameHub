import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./../style.css";
import APIURL from "./../APIURL.json";
import Navbar from "./../Elements/Navbar";
import { MdShoppingCart } from "react-icons/md";
import Cookies from "js-cookie";
function ViewItem() {
  const { linkId } = useParams();
  const [game, setGame] = useState(" ");
  useEffect(() => {
  
    try {
      fetch(`${APIURL.apiUrl}/Game/GetGameByLinkId/${linkId}`)
        .then((response) => response.json())
        .then((data) => {
          setGame(data);
          document.title = data.name;
        })
        .catch((err) => console.error(err));
    } catch (err) {}
  }, []);
  const addGameToCart = (id) => {
    if(Cookies.get("uid") == null) return window.alert("Ehet bejelentkezés szükséges!")
       //TODO
  }
  return (
    <>
      <Navbar />
      {game == null ? (
        <p className="text-center">Hiba az oldal betöltése során ! 😭</p>
      ) : (
        <>
          <div className="container">
            <div className="viewitem">
              <div className="d-flex">
                <img src={game[0].game.banner} alt="" />
                <div>
                  <h3 className="ms-5 mt-2">{game[0].game.name}</h3>
                  <p className="p-5 mt-2">{game[0].game.longdescr}</p>
                  <p className="bg-success p-2 text-center ms-2">{game[0].price} FT</p>
                  <div className="d-flex justify-content-center">
                    <div className="input-group ms-2">
                      <button className="custom-btn backround-main form-control" onClick={() => addGameToCart(game[0].game.id)}>
                        <MdShoppingCart size={23} className="me-3" />
                        Kosárba
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default ViewItem;
