import React from "react";
import PostHeader from "./PostHeader";
import styles from "./PostContent.module.css";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const PostContent = (props) => {
  const imagePath = `/images/posts/${props.postData.slug}/${props.postData.image}`;

  const customRenderers = {
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div className={styles["post-image"]}>
            <Image
              src={image.properties.src}
              alt={image.properties.alt}
              width={1200}
              height={600}
            />
          </div>
        );
      } else {
        return <p className={styles["post-paragraph"]}>{paragraph.children}</p>;
      }
    },

    code(code) {
      const { className, children } = code;
      const language = className.split("-")[1];

      return (
        <SyntaxHighlighter style={atomDark} language={language}>
          {children}
        </SyntaxHighlighter>
      );
    },

    h1(heading) {
      return <h1 className={styles["post-heading"]}>{heading.children}</h1>;
    },
    h2(heading) {
      return (
        <h1 className={styles["post-heading--secondary"]}>
          {heading.children}
        </h1>
      );
    },
  };

  return (
    <div className={styles["post-content"]}>
      <PostHeader title={props.postData.title} img={imagePath} />
      <ReactMarkdown components={customRenderers}>
        {props.postData.content}
      </ReactMarkdown>
    </div>
  );
};

export default PostContent;
