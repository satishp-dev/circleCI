import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  // Use a logging library like winston or pino
  if (process.env.NODE_ENV !== 'production') {
    console.warn("Document rendered");
  }
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