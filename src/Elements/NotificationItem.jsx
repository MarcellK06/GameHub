import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./../style.css";
function NotificationItem({notification}) {
    var dt = new Date(notification.notification.notificationTime);

    const notificationBodies = {
        0 : "NEW_MESSAGE",
        1: "FRIEND_REQUEST"
    }

  return (
<div className="alert-item p-3">
                    <div className="d-flex justify-content-between">
                        {notification.notification.notificationText}
                      <img
                        src={notification.user.avatar}
                        alt=""
                        className="alert-avatar"
                      />
                    </div>
                    <p className="text-secondary">
                    {`${dt.toDateString()} ${dt.toTimeString().split(' G')[0]}`}</p>
                  </div>
  );
}
export default NotificationItem;