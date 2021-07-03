import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>tossy_yukky vercel blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <Link href="/sub">hogehoge</Link>
        </div>
        <div>
          <Link href="/three">Threejs</Link>
        </div>
        <div>
          <a className="twitter-timeline" href="https://twitter.com/tossy_yukky?ref_src=twsrc%5Etfw" data-width="600">Tweets by
            tossy_yukky</a>
          <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
