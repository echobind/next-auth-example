import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'next-auth/client';
import { DefaultLayout } from '../layouts/DefaultLayout/index';

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <ChakraProvider>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
