import { QueryClient } from 'react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: 0,
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
});
