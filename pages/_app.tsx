import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  // Use a proper logging mechanism
  // logger.debug('sdjsdjsddj')
   return <Component {...pageProps} />; 
 }