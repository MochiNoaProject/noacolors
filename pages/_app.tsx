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
                <link rel="shortcut icon" href="/static/images/icons/favicon.png" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/static/images/icons/favicon.png" />
                <meta name="theme-color" content="#faa65f" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@_noach" />
                <meta name="twitter:image" content="https://noacolors.now.sh/static/twitter-ogp.png" />
                <meta name="twitter:title" content="noacolors" />
                <meta name="twitter:description" content="望月のあのカラーパレット" />
                <link href="https://fonts.googleapis.com/css?family=Kosugi+Maru&display=swap" rel="stylesheet" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
