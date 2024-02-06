import React, { useEffect, useState } from "react";
import "./../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { FaTrashCan } from "react-icons/fa6";
import APIURL from "../APIURL.json";
import Cookies from "js-cookie";
import $ from "jquery";

function OverviewItem({data}) {
    return (
        <>
        <div className="d-flex justify-content-between ovwdata">
            <p className="cartItemName">{data.name}</p>
            <p className="optionalLine">-</p>
            <p className="cartItemPrice">{data.price}</p>
        </div>
        <hr />
        </>
    );
}
export default OverviewItem;
