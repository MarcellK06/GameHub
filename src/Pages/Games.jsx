import React, { useRef, useState } from "react";
import "./../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from "./../Elements/Navbar";
function Games() {
  const searchRef = useRef();
  const [searchResults, setSearchResult] = useState(["Kezdj el gépelni a kereséshez !"])

  const Search = () => {
    const _svalue = searchRef.current.value;
    if (_svalue.length >= 3) {
      //TODO
    }
  };
  return (
    <>
      <Navbar />
      <div className="row">
        <div className="col-md-2">
          <div
            className="categories"
            style={{ height: "100vh", overflowY: "scroll" }}>
            <h4 className="text-center">Kategóriák</h4>
            <p className="text-center mb-2">Akció</p>
            <p className="text-center mb-2">Akció</p>
            <p className="text-center mb-2">Akció</p>
            <p className="text-center mb-2">Akció</p>
            <p className="text-center mb-2">Akció</p>
            <p className="text-center mb-2">Akció</p>
          </div>
        </div>
        <div className="col-md" style={{ overflowY: "scroll !important" }}>
          <div className="row">
            <div className="col-9"></div>
            <div className="col-2">
              <div className="input-group mt-4">
                <input
                  type="text"
                  className="form-control dropdown-toggle"
                  name=""
                  id=""
                  placeholder="Keresés"
                  ref={searchRef}
                  data-bs-toggle="dropdown"
                  onInput={Search}
                />
                <ul class="dropdown-menu">
                        {searchResults.map(i => (
                            <li>
                            <a class="dropdown-item" href="#">
                             {i}
                            </a>
                          </li>
                        ))}
                </ul>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="row g-0">
            <div className="col">
              <div className="game">
                <div className="d-flex justify-content-center">
                  <img
                    src="https://cdkeyprices.uk/images/games/5659464/grand-theft-auto-v-desktop-logo-all.jpg"
                    alt="<game-name>-banner"
                  />
                </div>
                <p className="gamename text-center mt-3">GTA V</p>
                <p className="price">15 ft</p>
                <button className="custom-btn btn w-100">Kosárba</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Games;
