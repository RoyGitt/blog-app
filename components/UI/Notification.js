import React from "react";
import styles from "./Notification.module.css";

const Notification = (props) => {
  const { title, message, status } = props.onNotificationChange;

  let backgroundColor;

  if (status === "pending") {
    backgroundColor = "#3498db";
  } else if (status === "error") {
    backgroundColor = "#e74c3c";
  } else if (status === "success") {
    backgroundColor = "#2ecc71";
  }

  return (
    <div
      className={styles.notification}
      style={{
        backgroundColor: backgroundColor,
        display: status ? "flex" : "none",
      }}
    >
      <h3>{title}</h3>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
