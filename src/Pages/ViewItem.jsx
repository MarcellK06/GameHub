import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./../style.css";
import APIURL from "./../APIURL.json";
import Navbar from "./../Elements/Navbar";
import { MdShoppingCart } from "react-icons/md";

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
                <img src={game.banner} alt="" />
                <div>
                  <h3 className="ms-5 mt-2">{game.name}</h3>
                  <p className="p-5 mt-2">{game.longdescr}</p>
                  <p className="bg-success p-2 text-center ms-2">13000 FT</p>
                  <div className="d-flex justify-content-center">
                    <div className="input-group ms-2">
                      <button className="custom-btn backround-main form-control" onClick={() => addGameToCart(game.id)}>
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
