import React, { Fragment } from "react";
import ContactForm from "@/components/Contact/ContactForm";
import Head from "next/head";

const ContactPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact me</title>
        <meta
          name="description"
          content="Send me messages and queries, propose topics to discuss on next"
        />
      </Head>
      <ContactForm />
    </Fragment>
  );
};

export default ContactPage;
