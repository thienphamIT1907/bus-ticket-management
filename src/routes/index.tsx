import { PUBLIC_ROUTES } from '@/routes/public';
import { PublicLayout } from '@/layouts/PublicLayout';
import { PrivateLayout } from '@/layouts/PrivateLayout.tsx';
import { PRIVATE_ROUTES } from '@/routes/private.tsx';
import ErrorPage from '@/pages/ErrorPage';

export const ROUTES = [
  {
    path: '/',
    element: <PublicLayout />,
    children: PUBLIC_ROUTES,
    errorElement: <ErrorPage />,
  },
  {
    path: '/dashboard',
    element: <PrivateLayout />,
    children: PRIVATE_ROUTES,
    errorElement: <ErrorPage />,
  },
];
