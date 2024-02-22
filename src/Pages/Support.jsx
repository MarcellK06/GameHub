import React, { useRef, useState } from "react";
import "./../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from "../Elements/Navbar";
import { MdEmail } from "react-icons/md";
import { BsBuilding, BsGlobe, BsPersonCircle, BsPhone } from "react-icons/bs";
import { motion } from "framer-motion";

function Support() {
  return (
    <>
      <Navbar />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0 }}>
          <div className="cardcolor mb-2 mt-3 p-3 supportcard">
            <h2>Támogatás</h2>
            <p>
              Üdvözlünk a GameHub-nál, ahol szenvedélyünk és célunk az, hogy a
              legjobb játékélményt nyújtsuk ügyfeleinknek. Bármilyen kérdésed
              vagy problémád akad, ne habozz felvenni velünk a kapcsolatot.
              Szakértő csapatunk mindig rendelkezésedre áll, hogy segítsen
              megoldani az esetleges nehézségeket, és biztosítsa, hogy élményed
              zökkenőmentesen haladjon.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}>
          <div className="cardcolor mb-2 p-3 supportcard">
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}>
          <div className="cardcolor mb-2 p-3 supportcard">
            <h2>Cég adatok</h2>
            <p>
              Cég neve: GameHub
              <br />
              <BsBuilding /> Székhely: Mátészalka, Kölcsey u. 12, 4700
              <br />
              <BsPersonCircle /> Cégvezető: Kádár Marcell
              <br />
              <BsPhone /> Cégtelefon:{" "}
              <a href="tel:+36303926004">+36 30 392 6004</a>
              <br />
              <MdEmail /> E-mail:{" "}
              <a href="mailto:info@gamehub.hu">info@gamehub.hu</a>
              <br />
              <BsGlobe /> Weboldal: <a href="www.gamehub.com">www.gamehub.hu</a>
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Support;
