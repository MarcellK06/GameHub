import React from "react";
import "./../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { FaTrashCan } from "react-icons/fa6";
import APIURL from "../APIURL.json";

function CartItem({data}) {
    const removeItem = (id) => {
        console.log(id);
        fetch(`${APIURL.apiUrl}/Cart/RemoveCartItem/${id}`).then((res) => {
            window.location.reload();
        });
    }
    return (
        <>
        <div className="cartitem">
        <img src={data.banner} className="cartItemBanner" alt="jatek kep" />
        <div>
            <p className="cartItemName">{data.name}</p>
        </div>
        <div>
            <p className="cartItemShortDescr">{data.shortdesc}</p>
        </div>
        <div>
            <p className="cartItemPrice mt-2">{data.price}</p>
        </div>
        <div>
            <button className="btn" onClick={(event) => removeItem(data.cid)}>
            <FaTrashCan size={25} />
            </button>
        </div>
        </div>
        </>
    );
}
export default CartItem;
