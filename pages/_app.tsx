import "@/styles/globals.css";
import type { AppProps } from "next/app";


export default function App({ Component, pageProps }: AppProps) {
   console.log('ksdskdjksjdkdj')
   console.error('error')
   return <Component {...pageProps} />; 
 }
