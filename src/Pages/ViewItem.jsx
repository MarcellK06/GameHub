import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./../style.css";
import APIURL from "../APIURL.json";
import Navbar from "../Elements/Navbar";
import { MdShoppingCart } from "react-icons/md";
import Cookies from "js-cookie";
import $ from "jquery";
function ViewItem() {
  var uid = Cookies.get("uid");
  const { linkId } = useParams();
  const [game, setGame] = useState(" ");
  var [loading, setLoading] = useState(true);
  if (loading) {
      fetch(`${APIURL.apiUrl}/Game/GetGameByLinkId/${linkId}`)
        .then((response) => response.json())
        .then((data) => {
          setGame(data[0]);
          document.title = data[0].game.name;
        })
        .catch((err) => console.error(err)).finally(() => setLoading(false));
  }
  const addGameToCart = (id) => {
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
  if (loading == false){
    var banner = `data:image/png;base64, ${game.game.banner}`;
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
                  <img className="bannerimage" src={banner} alt="" />
                  <div>
                    <h3 className="ms-5 mt-2">{game.game.name}</h3>
                    <p className="p-5 mt-2">{game.game.longdescr}</p>
                    <p className="bg-success p-2 text-center ms-2 cartItemPrice">{game.price} </p>
                    <div className="d-flex justify-content-center">
                      <div className="input-group ms-2">
                        <button className="custom-btn backround-main form-control" onClick={() => addGameToCart(game.game.id)}>
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
}
export default ViewItem;
