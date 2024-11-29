import { Homepage } from '@/pages';
import { BusCompaniesDetailPage } from '@/pages/BusCompaniesDetailPage';

export const PUBLIC_ROUTES = [
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/bus-company/:id',
    element: <BusCompaniesDetailPage />,
  },
];
