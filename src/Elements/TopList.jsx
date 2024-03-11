import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./../style.css";
import APIURL from "./../APIURL.json";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { PiListBold } from "react-icons/pi";
import {motion} from 'framer-motion';
import JSON from '../backup.json';
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
    setGames(JSON[0].games);
    setLoading(false)
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
          <div className="toplist cardcolor mt-2">
            <p className="scrollLeft" onClick={previousCurrentSelected}><FaArrowLeft/></p>
            <div className="scroller">
              <div className="item spacerl"> {/*SPACER*/}
                <div>
                </div>
                <p className="shopGameName"></p>
              </div>
          {games.map((i, idx) => (
             <> 
              <div className="validitem item" id={`game${idx}`} onClick={() => navigator(`/game/${i.linkId}`)}>
              <motion.div
             
             initial={{ opacity: 0, z: 50 }}
             whileInView={{ opacity: 1, z: 0 }}
             viewport={{ once: false }}
             transition={{
               ease: "linear",
               duration: 1,
               y: { duration: 0.1 },
            
             }}>
              <div>
                  <img className="shopGameBanner" src={i.banner} alt=""/>
                </div>
                  <PiListBold size={40} className="gameHover"/>
                <p className="shopGameName"> {i.name}</p>
               </motion.div>
                
              </div>
            </>
              
            ))}
            <div className="item spacerr"> {/*SPACER*/}
              <div>
              </div>
              <p className="shopGameName"></p>
            </div>
            </div>
            
            <p className="scrollRight" onClick={nextCurrentSelected}><FaArrowRight/></p>
          </div>
        </div>
      </>
    );
            }
}
export default TopList;
