import React, { Fragment } from "react";
import PostContent from "@/components/PostDetail/PostContent";
import { getAllFiles, getPostData } from "@/lib/post-util";
import Head from "next/head";

const PostDetailPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Contact me</title>
        <meta name="description" content={props.post.brief} />
      </Head>
      <PostContent postData={props.post} />
    </Fragment>
  );
};

export default PostDetailPage;

export async function getStaticProps(context) {
  const { params } = context;
  const slug = params.slug;

  const adjustedFilename = `${slug}.md`;

  const postData = getPostData(adjustedFilename);

  return {
    props: {
      post: postData,
    },
  };
}

export async function getStaticPaths() {
  const allFiles = getAllFiles();
  const slugs = allFiles.map((filename) => filename.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({
      params: {
        slug: slug,
      },
    })),
    fallback: false,
  };
}
