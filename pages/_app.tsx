import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
   // console.log('sjdhjsdhjshdjhsdj') // Remove or comment out this line
   return <Component {...pageProps} />; 
 }