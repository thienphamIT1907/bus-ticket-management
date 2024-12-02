import { BusCompaniesDetailPage } from '@/pages/BusCompaniesDetailPage';
import { Homepage } from '@/pages/Homepage';

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
