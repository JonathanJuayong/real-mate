import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { theme } from '../lib/theme';
import { Layout } from '../components';
import 'focus-visible/dist/focus-visible';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        {/* <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&family=Roboto+Slab:wght@700&display=swap" rel="stylesheet"/> */}
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&family=Roboto+Slab:wght@700&display=swap" rel="stylesheet"/>
      </Head>
      <ChakraProvider resetCSS theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default MyApp
