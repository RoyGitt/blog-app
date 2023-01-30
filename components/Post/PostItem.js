import React from "react";
import styles from "./PostItem.module.css";
import Image from "next/image";
import Link from "next/link";

const PostItem = (props) => {
  const { slug, image, title, date } = props.post;

  const imagePath = `/images/posts/${slug}/${image}`;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Link href={`posts/${slug}`}>
      <li className={styles.post}>
        <Image
          src={imagePath}
          alt={title}
          className={styles["post__img"]}
          width={300}
          height={300}
          layout="responsive"
        />
        <h2 className={styles["post__heading"]}>{title}</h2>
        <time className={styles["post__time"]}> {formattedDate}</time>
        <p className={styles["post__brief"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis
          faucibus ante. Donec lacus ligula, ornare nec neque nec, placerat
          ornare nulla.
        </p>
      </li>
    </Link>
  );
};

export default PostItem;
