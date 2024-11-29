import { PUBLIC_ROUTES } from '@/routes/public';
import { PublicLayout } from '@/layouts/PublicLayout';
import { PrivateLayout } from '@/layouts/PrivateLayout.tsx';
import { PRIVATE_ROUTES } from '@/routes/private.tsx';

export const ROUTES = [
  {
    path: '/',
    element: <PublicLayout />,
    children: PUBLIC_ROUTES,
  },
  {
    path: '/dashboard',
    element: <PrivateLayout />,
    children: PRIVATE_ROUTES,
  },
];
