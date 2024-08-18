import { Html, Head, Main, NextScript } from 'next/document';

import { StyledComponentsProvider } from '@/lib/StyledComponentsProvider';

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <body>
        <StyledComponentsProvider>
          <Main />
          <NextScript />
        </StyledComponentsProvider>
      </body>
    </Html>
  );
}
