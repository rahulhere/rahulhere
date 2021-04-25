import React from "react";
import Head from "next/head";
import "../index.css";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Rahul Soni</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Rahul Soni - Portfolio" />
        <meta property="og:title" content="Rahul Soni - Portfolio" />
        <meta property="og:description" content="Rahul Soni - Portfolio" />
        <meta property="og:image" content="/display-image.jpg" />
        <meta property="og:url" content="http://rahulsoni.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
