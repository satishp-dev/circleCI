import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default function Document() {
  React.useEffect(() => {
    console.log("Document component rendered")
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
