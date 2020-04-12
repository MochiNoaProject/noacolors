import "./style.css"
import * as React from "react"
import { AppProps } from "next/app"
import Head from "next/head"

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>noacolors</title>
                <meta name="description" content="望月のあのカラーパレット" />

                <link rel="apple-touch-icon" sizes="180x180" href="/static/images/icons/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/static/images/icons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/static/images/icons/favicon-16x16.png" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="mask-icon" href="/static/images/icons/safari-pinned-tab.svg" color="#00aba9" />
                <link rel="shortcut icon" href="/static/images/icons/favicon.ico" />
                <meta name="msapplication-TileColor" content="#603cba" />
                <meta name="msapplication-config" content="/static/images/icons/browserconfig.xml" />
                <meta name="theme-color" content="#ffffff" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="noacolors" />
                <meta name="twitter:image" content="" />
                <meta name="twitter:description" content="望月のあのカラーパレット" />
                <link href="https://fonts.googleapis.com/css?family=Kosugi+Maru&display=swap" rel="stylesheet" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
