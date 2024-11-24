import { AntdNotificationProvider } from '@/providers';
import { ROUTES } from '@/routes';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '@/shared/styles/index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const router = createBrowserRouter(ROUTES);

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AntdNotificationProvider>
        <RouterProvider router={router} />
      </AntdNotificationProvider>
    </QueryClientProvider>
  </StrictMode>,
);
