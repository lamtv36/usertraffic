import '../../styles/styles.scss'
import Script from 'next/Script'

function Custom({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default Custom
