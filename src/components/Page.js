import React from 'react';
import Helmet from "react-helmet";
import App from './App'

 const Page = () => {
    return (
        <main>
            <Helmet>
                {/* <!-- HTML Meta Tags --> */}
                <title>Időjárás</title>
                <meta name="description" content="kiskunmajsa idojarasa" />

                {/* <!-- Google / Search Engine Tags --> */}
                <meta itemprop="name" content="Időjárás" />
                <meta itemprop="description" content="Showing the weather in Kiskunmajsa" />
                <meta itemprop="image" content="https://flafi.hu/jsthings/kiskunmajsa/logo512.png" />

                {/* <!-- Facebook Meta Tags --> */}
                <meta property="og:url" content="https://flafi.hu/jsthings/kiskunmajsa" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Időjárás" />
                <meta property="og:description" content="" />
                <meta property="og:image" content="" />

                {/* <!-- Twitter Meta Tags --> */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Időjárás" />
                <meta name="twitter:description" content="" />
                <meta name="twitter:image" content="" />
            </Helmet>
            <App />
        </main>
    );
}

export default Page
