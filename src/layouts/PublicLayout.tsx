import { Header } from '@/shared/components';
import { Outlet } from 'react-router-dom';
import { Footer } from '@/shared/components/core/Footer.tsx';

export const PublicLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
