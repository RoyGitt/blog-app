import React from "react";
import styles from "./PostHeader.module.css";
import Image from "next/image";

const PostHeader = (props) => {
  return (
    <>
      <div className={styles["post-header"]}>
        <h1 className={styles["post-header__title"]}>{props.title}</h1>
        <Image
          className={styles["post-header__image"]}
          src={props.img}
          width="300"
          height="180"
          alt={props.title}
        />
      </div>
    </>
  );
};

export default PostHeader;
