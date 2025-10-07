import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
   // console.log('djksjdksjd app') // Commented out for production
   return <Component {...pageProps} />;  
  }