import React from "react";
import styles from "./FeaturedEvents.module.css";
import PostGrid from "../Post/PostGrid";

const FeaturedEvents = (props) => {
  return (
    <section>
      <h2 className={styles.heading}>Featured posts</h2>
      <PostGrid postData={props.postData} />
    </section>
  );
};

export default FeaturedEvents;
