import { AntdNotificationProvider } from '@/providers';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/shared/styles/index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Routerbase } from '@/providers/RouterBase';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AntdNotificationProvider>
        <Routerbase />
        {/* <ReactQueryDevtools initialIsOpen={false} position="left" /> */}
      </AntdNotificationProvider>
    </QueryClientProvider>
  </StrictMode>,
);
