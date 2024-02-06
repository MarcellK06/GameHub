import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./../style.css";
import Navbar from "./../Elements/Navbar";
import APIURL from "./../APIURL.json";
import Cookies from "js-cookie";
import CartItem from "../Elements/CartItem";
import OverviewItem from "../Elements/Overview";
import LogInToView from '../Elements/LogInToView';
function Cart() {
  var uid = Cookies.get("uid");
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  if(uid == null) return (<>  <Navbar /> <LogInToView/></>);
  if (loading == true){
    fetch(`${APIURL.apiUrl}/Cart/getUserCart/${uid}`).then((res) => res.json()).then((data) => setCartItems(data)).catch((err) => console.error(err)).finally(() => setLoading(false));
  }
 
  if (loading == false) {
  return (
    <> 
    <Navbar /> 
      <div className="container cartcontainer">
        <div className="cart">
          <div className="row g-3">
              {cartItems.map((i) => <CartItem data={i}/>)}
          </div>
        </div>
        
            <div className="col-4">
              <div className="p-3 cardcolor">
                <p className="text-center ovwtext">Összegzés</p>
                <hr className="seperateOverview mb-2 mt-2 text-light"/>
                <div className="d-flex justify-content-between overview">
                  {cartItems.map((i) => <OverviewItem data={i}/>)}
                </div>
              </div>
            </div>
      </div>
    </>
  );
  }
}
export default Cart;
