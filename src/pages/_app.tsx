import { ReactElement } from 'react';
import { AppProps } from 'next/app';

export interface IAppProps {
  Component: ReactElement;
}

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} />;
}

export default MyApp;
