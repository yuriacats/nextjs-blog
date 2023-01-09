import Head from 'next/head'
import styles from './layout.module.scss'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'
import React from 'react'

const name: string = 'yuriacats'
export const siteTitle: string = 'Yuria Uehara\'s Home page'

const Layout: React.FunctionComponent<{
    children: React.ReactNode;
    home?: boolean;
}> = ({ children, home }) => {
     return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
                      integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"
                      crossOrigin="anonymous"/>

                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.now.sh/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />

            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <img
                            src="/images/profile_icon.png"
                            className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                            alt={name}
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <a>
                                <img
                                    src="/images/profile_icon.png"
                                    className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                                    alt={name}
                                />
                            </a>
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/">
                                <a className={utilStyles.colorInherit}>{name}</a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    )
}
export default Layout;