import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default function Document() {
  /* Runs once after component mounts to log render */
  React.useEffect(() => {
    consol.log('testhhing')
  }, []);
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
