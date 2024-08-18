import { ReactNode, useState } from 'react';

import {
  QueryClient,
  QueryClientProvider as QueryClientProviderLib
} from '@tanstack/react-query';

export function QueryClientProvider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false
          }
        }
      })
  );

  return (
    <QueryClientProviderLib client={queryClient}>
      {children}
    </QueryClientProviderLib>
  );
}
