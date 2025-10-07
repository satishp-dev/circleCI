import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  // console.warn("Document rendered"); 
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