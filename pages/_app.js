import "@/styles/globals.css";
import { useState } from 'react';
import Preloader from '@/components/Preloader';

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  const handlePreloaderComplete = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && <Preloader onComplete={handlePreloaderComplete} />}
      <Component {...pageProps} />
    </>
  );
}
