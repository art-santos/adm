import { AppProps } from 'next/app';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from '../components/screen/Layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ADMIN</title>
      </Head>
      <Layout>
        <CssBaseline />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
