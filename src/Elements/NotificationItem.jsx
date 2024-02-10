import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./../style.css";
import APIURL from "../APIURL.json";
import React, { useState } from "react";
function NotificationItem({notification}) {
    var notificationDate = new Date(notification.notification.notificationTime);
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    notificationDate = `${notificationDate.toDateString()} ${notificationDate.toTimeString().split(' G')[0]}`;
    var notificationType = notification.notification.notificationType;
    var notificationText = notification.notification.notificationText;
    var notificationRead = notification.notification.read;
    var avatar = notification.user.avatar;
    var username = notification.user.username;
    var fId = notification.notification.notificationExtra;
    console.log(fId);
    const notificationBodies = {
        0 : "SPECIAL_NOTIFICATION",
        1: "FRIEND_REQUEST",
        2: "NEW_MESSAGE"
    }

    if (loading == true){
        fetch(`${APIURL.apiUrl}/User/getUserById/${fId}`)
        .then((response) => response.json())
        .then((data) => {
            setUser(data);  
        }).finally(() => setLoading(false));
    }
    if (notificationBodies[notificationType] == "FRIEND_REQUEST"){
        if (loading == false){
        return (
        <div className={`alert-item-${notificationRead} p-3`}>
                            <div className="d-flex justify-content-between">
                                Barátkérelem érkezett tőle: {user.username}
                            <img
                                src={avatar}
                                alt=""
                                className="alert-avatar"
                            />
                            </div>
                            <p className="text-secondary">
                            {notificationDate}</p>
                        </div>
        );
    }
    }
    if (notificationBodies[notificationType] == "NEW_MESSAGE"){
        
    if (loading == false){
        return (
        <div className={`alert-item-${notificationRead} p-3`}>
                            <div className="d-flex justify-content-between">
                                Új üzenet érkezett tőle: {user.username}.
                            <img
                                src={avatar}
                                alt=""
                                className="alert-avatar"
                            />
                            </div>
                            <p className="text-secondary">
                            {notificationDate}</p>
                        </div>
        );
    }
    }
    if(notificationBodies[notificationType] == "SPECIAL_NOTIFICATION"){
        return (
            <div className={`alert-item-${notificationRead} p-3`}>
                                <div className="d-flex justify-content-between">
                                    {notificationText}
                                <img
                                    src={avatar}
                                    alt=""
                                    className="alert-avatar"
                                />
                                </div>
                                <p className="text-secondary">
                                {notificationDate}</p>
                            </div>
            );
    }
}
export default NotificationItem;