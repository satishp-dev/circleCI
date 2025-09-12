import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
   // replace with a proper logging mechanism
   // logger.debug('hellloo')
   return <Component {...pageProps} />; 
 }