import { ROUTES } from '@/routes';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export const Routerbase = () => {
  const router = createBrowserRouter(ROUTES);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
