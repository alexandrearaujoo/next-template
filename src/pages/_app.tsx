import { PagesProgressBar as ProgressBar } from 'next-nprogress-bar';
import type { AppProps } from 'next/app';

import { QueryClientProvider } from '@/lib/QueryClientProvider';
import { ThemeProvider } from '@/lib/ThemeProvider';
import { GlobalStyles } from '@/styles/global';
import { Toaster } from 'sonner';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider>
      <ThemeProvider>
        <Component {...pageProps} />
        <GlobalStyles />
        <Toaster
          position="top-right"
          expand={false}
          richColors
          closeButton
          toastOptions={{
            style: {
              padding: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }
          }}
        />
        <ProgressBar
          height="4px"
          options={{ showSpinner: false }}
          shallowRouting
        />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
