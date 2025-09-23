import "@/styles/globals.css";
import type { AppProps } from "next/app";
import logger from 'winston';


export default function App({ Component, pageProps }: AppProps) {
   logger.info('ksdskdjksjdkdj');
   logger.error('error');
   return <Component {...pageProps} />; 
 }