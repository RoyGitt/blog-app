import Link from "next/link";
import React from "react";
import styles from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div className={styles.layout}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/" className={styles.logo}>
              BLOG&apos;R
            </Link>
          </li>
        </ul>
        <ul className={styles["nav__links"]}>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <main className={styles.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
