import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'next-auth/client';

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
      <ChakraProvider>
          <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
