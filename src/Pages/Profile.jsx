import React, { useEffect, useRef, useState } from "react";
import "./../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from "./../Elements/Navbar";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import APIURL from './../APIURL.json';
function Profile(){
    const navigator = useNavigate();

    const [user, setUser] = useState();
    useEffect(() => {
        if(Cookies.get("uid") == null){
            navigator('/');
        }
        document.title = "Profil";
        fetch(`${APIURL.apiUrl}/User/getUserById/${Cookies.get("uid")}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })    
    }, [])
    return (
        <>
         <Navbar/>
        </>
    )
}
export default Profile;