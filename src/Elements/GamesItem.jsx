import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cookies from "js-cookie";
import $ from 'jquery';
import APIURL from "./../APIURL.json";
import "./../style.css";
function GamesItem({game}) {
    const addGameToCart = (id) => {
        const uid = Cookies.get("uid");
        if(uid == null) return window.alert("Ehez bejelentkezés szükséges!")
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
  return (
      <div className="game">
        <div className="d-flex justify-content-center">
          <img
            src={game.game.banner}
            alt="<game-name>-banner"
          />
        </div>
        <p className="gamename text-center mt-3">{game.game.name}</p>
        <p className="price">{game.shop.price}</p>
        <button className="custom-btn btn w-100 backbtn" onClick={event => addGameToCart(game.game.id)}>Kosárba</button>
       </div>
  );
}
export default GamesItem;