import React, { useEffect, useState } from "react";
import "./../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from "../Elements/Navbar";
import kep from "./../media/s1.png";
import Popup from "../Elements/Popup";
import { FaSleigh } from "react-icons/fa6";
import APIURL from "./../APIURL.json";
import Cookies from "js-cookie";
import { FaCalendarCheck } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import LogInToView from "./../Elements/LogInToView";

function Library() {
  const [library, setLibrary] = useState([]);
  const [selected, setSelectedgame] = useState();
  var uid = Cookies.get("uid");
  useEffect(() => {
    if (uid == null) {
      return;
    }
    fetch(`${APIURL.apiUrl}/Library/GetLibraryItems/${uid}`)
      .then((response) => response.json())
      .then((data) => {
        setLibrary(data);
        setSelectedgame(data[0].gameData.id);
        console.log(data);
      });
  }, []);
  if (uid == null) {
    return (
      <>
        <Navbar />
        <LogInToView />
      </>
    );
  }
  const OpenedGame = ({ gameid }) => {
    return (
      <>
        {library.map((i) => (
          <>
            {i.gameData.id == gameid ? (
              <>
                <div className="row">
                  <div className="col-xl">
                    <img
                      src={i.gameData.banner}
                      className="img-fluid resizeLibraryImage"
                      alt=""
                    />
                  </div>
                  <div className="col-xl">
                    <br /><br /><br /><br />
                    <br />
                    <div className="mt-5">
                      <h4 className="mt-5"> {i.gameData.name}</h4>
                      <p className="text-brake">{i.gameData.longdescr}</p>

                      <div className="d-flex">
                        <FaCalendarCheck size={30} />

                        <p className="ms-3" style={{ marginTop: "3px" }}>
                          Megvásárolva:
                          <span className="text-bold">
                            {" "}
                            {
                              new Date(i.purchased_since)
                                .toISOString()
                                .split("T")
                                .join(" ")
                                .split(".")[0]
                            }
                          </span>
                        </p>
                      </div>
                      <div className="d-flex">
                        <FaClock size={30} />
                        <p className="ms-3" style={{ marginTop: "3px" }}>
                          Játékban töltött idő:{" "}
                          <span className="text-bold">32 óra (TODO)</span>
                        </p>
                      </div>

                      <button className="custom-btn backround-main libraryPlayButton">
                        Indítás
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
          </>
        ))}
      </>
    );
  };
  return (
    <>
      <Navbar />

      <div className="row g-0">
        <div className="col-md-2 library libraryitems cardcolor">
          {library.map((i) => (
            <>
              <div
                className="cursor-pointer libraryItem"
                onClick={() => setSelectedgame(i.gameData.id)}>
                <div className="d-flex">
                  <img
                    src={i.gameData.icon}
                    className="libraryIconImage"
                    alt=""
                  />
                  <h5 className="libraryGameName"> {i.gameData.name}</h5>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="col-md container">
          <OpenedGame gameid={selected} />
        </div>
      </div>
    </>
  );
}
export default Library;
