import { Header } from '@/shared/components';
import { Outlet } from 'react-router-dom';
import { Footer } from '@/shared/components/core/Footer.tsx';

export const PublicLayout = () => {
  return (
    <div className="bg-gray-50">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
