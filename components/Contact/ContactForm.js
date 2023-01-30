import React, { Fragment, useEffect, useRef, useState } from "react";
import styles from "./ContactForm.module.css";
import Button from "../UI/Button";
import Notification from "../UI/Notification";

const sendContactData = async (contactDetails) => {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetails),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
};

const ContactForm = () => {
  const [notification, setNotification] = useState({
    title: "",
    message: "",
    status: "",
  });

  useEffect(() => {
    if (notification.status === "success" || notification.status === "error") {
      const timer = setTimeout(() => {
        setNotification({
          title: "",
          message: "",
          status: "",
        });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification.status]);

  const emailInputREf = useRef();
  const nameInputRef = useRef();
  const messageInputRef = useRef();

  const messageSubmitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInputREf.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredMessage = messageInputRef.current.value;

    setNotification({
      title: "Pending...",
      message: "Connecting to the server...",
      status: "pending",
    });

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      setNotification({
        title: "Success!",
        message: "The message is sent!",
        status: "success",
      });
    } catch (error) {
      setNotification({
        title: "Error :(",
        message: error.message || "Something went wrong!",
        status: "error",
      });
    }

    emailInputREf.current.value = "";
    nameInputRef.current.value = "";
    messageInputRef.current.value = "";
  };

  return (
    <Fragment>
      <form className={styles.form} onSubmit={messageSubmitHandler}>
        <h1 className={styles["form__legend"]}>How can i help you?</h1>
        <div className={styles["form__controls"]}>
          <div className={styles["form__control"]}>
            <label htmlFor="email">Your Email</label>
            <input id="email" type="email" required ref={emailInputREf} />
          </div>
          <div className={styles["form__control"]}>
            <label htmlFor="name">Your Name</label>
            <input id="name" type="text" ref={nameInputRef} />
          </div>
        </div>
        <div className={styles["form__control"]}>
          <label htmlFor="message">Your Message</label>
          <textarea id="message" rows={5} ref={messageInputRef} />
        </div>
        <Button>Send</Button>
      </form>
      <Notification onNotificationChange={notification} />
    </Fragment>
  );
};

export default ContactForm;
