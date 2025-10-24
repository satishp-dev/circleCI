import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
   // Insert meaningful code here
   return <Component {...pageProps} />
}

// Add a newline at the end of the file