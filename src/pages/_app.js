import Layout from '../layout/Main.component';

import '../styles/globals.scss'
import '../styles/Article.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
