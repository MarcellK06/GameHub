import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cookies from "js-cookie";
import $ from 'jquery';
import APIURL from "./../APIURL.json";
import "./../style.css";
function GamesItem({game}) {
  var backup = true;
    const addGameToCart = (id) => {
      if (!backup){
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
      else {
        return window.alert("A weboldal biztonsági mentésről fut, ez a művelet nem engedélyezett!");
      }
    }
  return (
      <div className="game">
        <div className="d-flex justify-content-center">
          <img
            src={game.banner}
            alt="<game-name>-banner"
          />
        </div>
        <p className="gamename text-center mt-3">{game.name}</p>
        <p className="price">{game.price}</p>
        <button className="custom-btn btn w-100 backbtn" onClick={event => addGameToCart(game.id)}>Kosárba</button>
       </div>
  );
}
export default GamesItem;