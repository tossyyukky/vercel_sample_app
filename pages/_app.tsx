import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <div>
    <Component {...pageProps} />
    <p>hoge</p>
  </div>
}

export default MyApp
