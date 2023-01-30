import React, { Fragment } from "react";
import { getAllPosts } from "@/lib/post-util";
import Head from "next/head";
import PostGrid from "@/components/Post/PostGrid";

const AllPostsPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Blogs</title>
        <meta name="description" content="Blogs related to programming." />
      </Head>
      <h2
        style={{
          fontSize: "10rem",
          letterSpacing: "4px",
          marginTop: "5rem",
          textAlign: "center",
          color: "#333",
          textTransform: "uppercase",
        }}
      >
        All posts
      </h2>
      <PostGrid postData={props.posts} />
    </Fragment>
  );
};

export default AllPostsPage;

export async function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}
