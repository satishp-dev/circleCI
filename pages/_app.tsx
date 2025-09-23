import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
   // Consider using a proper logging library instead of console.log
   return <Component {...pageProps} />; 
 }