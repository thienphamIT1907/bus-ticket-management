import { BusCompaniesDetailPage } from '@/pages/BusCompaniesDetailPage';
import { Homepage } from '@/pages/Homepage';
import { LoginPage } from '@/pages/LoginPage';

export const PUBLIC_ROUTES = [
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: 'dashboard/login',
    element: <LoginPage />
  },
  {
    path: '/bus-company/:id',
    element: <BusCompaniesDetailPage />,
  },
];
