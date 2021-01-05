import React from "react";
import Head from "next/head";

const Assessibility = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=0.5, maximum-scale=3.0,user-scalable=yes"
      />
      <meta name="description" content="Description" />
      <meta name="keywords" content="Keywords" />
      <title>ClipboardHealth</title>

      <link rel="manifest" href="/manifest.json" />
      <link href="/favicon.ico" rel="icon" />
      <link rel="stylesheet" href="/globals.css" />
      <link rel="apple-touch-icon" href="/apple-icon.png"></link>
      <meta name="theme-color" content="#317EFB" />
    </Head>
  );
};

export default Assessibility;
