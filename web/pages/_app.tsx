import React from "react";
import GlobalStyles from "../GlobalStyles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} key={router.route} />
    </>
  );
}

export default MyApp;
