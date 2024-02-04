import { useEffect } from 'react';
import { Inter } from "next/font/google";
import { ChessProvider } from '../context/ChessContext';
import '../app/globals.css'



const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  useEffect(() => {

    document.body.className = inter.className;
  }, []);

  return (
    <ChessProvider>
      <Component {...pageProps} />
    </ChessProvider>
  );
}

export default MyApp;