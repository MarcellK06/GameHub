import React, { useRef, useState } from "react";
import "./../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from "./../Elements/Navbar";
import TopList from "../Elements/TopList";

function Tamogatas() {
  return (
    <>
      <Navbar />
      <div className="container">

        <div className="cardcolor mb-2 mt-3 p-3">
          <h2>Támogatás</h2>
          <p>
            Üdvözlünk a GameHub-nál, ahol szenvedélyünk és célunk az, hogy a
            legjobb játékélményt nyújtsuk ügyfeleinknek. Bármilyen kérdésed vagy
            problémád akad, ne habozz felvenni velünk a kapcsolatot. Szakértő
            csapatunk mindig rendelkezésedre áll, hogy segítsen megoldani az
            esetleges nehézségeket, és biztosítsa, hogy élményed zökkenőmentesen
            haladjon.
          </p>
        </div>

       
        <div className="cardcolor mb-2 p-3">
          <h2>Bemutatkozás</h2>
          <p>
            Üdvözöllek a GameHub-nál! Mi vagyunk azok, akik azért vagyunk itt,
            hogy biztosítsuk, hogy minden játékos számára könnyű legyen
            hozzáférni a legújabb és legizgalmasabb játékokhoz. Cégünk
            elkötelezett amellett, hogy kiváló ügyfélszolgálatot nyújtson, és
            minden ügyfélnek garantáljuk a kiváló minőségű szolgáltatást és
            támogatást.
          </p>
        </div>

        
        <div className="cardcolor mb-2 p-3">
          <h2>Cég adatok</h2>
          <p>
            Cég neve: GameHub
            <br />
            Székhely: Budapest, Magyarország
            <br />
            Cégvezető: Minta Péter
            <br />
            Cégtelefon: [+36 XXX XXX XXX]
            <br />
            E-mail: info@gamehub.com
            <br />
            Weboldal: <a href="www.gamehub.com">www.gamehub.hu</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Tamogatas;
