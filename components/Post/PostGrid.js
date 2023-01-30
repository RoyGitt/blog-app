import React, { Fragment } from "react";
import styles from "./PostGrid.module.css";
import PostItem from "./PostItem";

const PostGrid = (props) => {
  return (
    <Fragment>
      <ul className={styles["post-grid"]}>
        {props.postData.map((post) => {
          return <PostItem key={post.slug} post={post} />;
        })}
      </ul>
    </Fragment>
  );
};

export default PostGrid;
