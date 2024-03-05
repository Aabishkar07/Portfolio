// import Navbar from '@/component/layouts/navbar'
// import '@/styles/globals.css'
// import type { AppProps } from 'next/app'

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }





import React from 'react';
import Navbar from '@/component/layouts/navbar'; // Adjust the path as per your project structure
import '../styles/globals.css'; // Adjust the path as per your project structure
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="max-md:pt-0 max-lg:pt-0 max-sm:pt-0 max-w-screen-3xl mx-auto">
        <Component {...pageProps} />
      </div>
    </div>
  );
};

export default App;
