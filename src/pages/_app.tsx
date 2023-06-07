import '@/styles/globals.css';
import { ThemeProvider, createTheme } from '@mui/material';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#3f51b5',
      },
      secondary: {
        main: '#f50057',
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ng Say Peng</title>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
