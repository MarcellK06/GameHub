import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./../style.css";
import APIURL from "../APIURL.json";
import Navbar from "../Elements/Navbar";
import { MdShoppingCart } from "react-icons/md";
import Cookies from "js-cookie";
import JSON from './../backup.json';
import $ from "jquery";
function ViewItem() {
  var uid = Cookies.get("uid");
  const { linkId } = useParams();
  const [game, setGame] = useState(" ");
  var [loading, setLoading] = useState(true);
  var backup = true;
  if (loading) {
    if (!backup) {
    fetch(`${APIURL.apiUrl}/Game/GetGameByLinkId/${linkId}`)
      .then((response) => response.json())
      .then((data) => {
        setGame(data[0]);
        document.title = data[0].game.name;
        const link = document.querySelector('link[rel="icon"]');

        link.setAttribute("href", `${data[0].game.icon}`);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
    }
    
  }
  useEffect(() => {
    if (backup) {
    var jatek = JSON[0].games.find(i => i.linkId == linkId);
    loading = false;
    setGame(jatek);
    }
   
  }, [])
  const addGameToCart = (id) => {
    if (!backup) {
    if (uid == null) return window.alert("Ehhez bejelentkezés szükséges!");
    const data = {
      userId: uid,
      gameId: id,
    };
    $.ajax({
      type: "PUT",
      url: `${APIURL.apiUrl}/Cart/AddCartItem`,
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(data),
      success: function (res) {
        window.location.reload();
      },
      error: function (res) {
        console.log(res);
      },
    });
  }
  if (backup) {
    return window.alert("A weboldal biztonsági mentésről fut, ez a művelet nem engedélyezett!");
  }
  };
  
    return (
      <>
        <Navbar />
        {game == null ? (
          <p className="text-center">Hiba az oldal betöltése során ! 😭</p>
        ) : (
          <>
            <div className="container">
              <div className="viewitem">
                <div className="row g-0">
                  <div className="col-sm">
                    <img
                      className="bannerimage"
                      src={game.banner}
                      alt=""
                    />
                  </div>
                  <div className="col-sm">
                   <div className="d-flex">
                     <div className="me-5">
                      <h3 className="ms-5 mt-2">{game.name}</h3>
                      <p className="p-5 mt-2">{game.longdescr}</p>
                      <p className="bg-success p-2 text-center ms-2 cartItemPrice">
                        {game.price}
                      </p>
                      <div className="d-flex justify-content-center">
                        <div className="input-group ms-2">
                          <button
                            className="custom-btn backround-main form-control"
                            onClick={() => addGameToCart(game.id)}>
                            <MdShoppingCart size={23} className="me-3" />
                            Kosárba
                          </button>
                        </div>
                      </div>
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
