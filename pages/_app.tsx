import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
   // remove console.log statement
   return <Component {...pageProps} />; 
 }