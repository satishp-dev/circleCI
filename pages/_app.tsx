import "@/styles/globals.css";
import type { AppProps } from "next/app";
import logger from 'winston';


export default function App({ Component, pageProps }: AppProps) {
   // console.log('ksdskdjksjdkdj') // Consider removing this line or replace it with a proper logging mechanism
   logger.error('error');
   return <Component {...pageProps} />; 
 }