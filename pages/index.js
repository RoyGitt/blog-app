import { Fragment } from "react";
import Hero from "@/components/Homepage/Hero";
import FeaturedEvents from "@/components/Homepage/FeaturedEvents";
import { getFeaturedPosts } from "@/lib/post-util";
import Head from "next/head";

export default function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>BLOG&apos;R by Roy</title>
        <meta
          name="description"
          content="I write blogs on topic related to programming"
        />
      </Head>
      <Hero />
      <FeaturedEvents postData={props.posts} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
