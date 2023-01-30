import React from "react";
import styles from "./Hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={styles["section__hero"]}>
      <Image
        src="/images/site/profile-pic.jpg"
        alt="This is how i look"
        width={400}
        height={400}
        className={styles["section__img"]}
      />
      <h1 className={styles["section__hero__name"]}>Hi, I&apos;m Roy</h1>
      <p className={styles["section__hero__message"]}>
        <span>
          I blog about Web Development, Especially &quot;Frontend&quot;
        </span>
        <span>Don&apos;t stare, Start scrolling.</span>
      </p>
    </section>
  );
};

export default Hero;
