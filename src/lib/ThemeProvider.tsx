import { ReactNode } from 'react';

import { ThemeProvider as ThemeProviderLib } from 'styled-components';

import { theme } from '@/styles/theme';

export function ThemeProvider({ children }: { children: ReactNode }) {
  return <ThemeProviderLib theme={theme}>{children}</ThemeProviderLib>;
}
