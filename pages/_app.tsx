import "@/styles/globals.css";
import type { AppProps } from "next/app";
import logger from 'winston';

export default function App({ Component, pageProps }: AppProps) {
   // remove console.log statement
   // import a logging library such as winston or pino
   // use the logger for logging
   logger.info('jsjsdhsdshdjhsdjh');
   return <Component {...pageProps} />; 
 }