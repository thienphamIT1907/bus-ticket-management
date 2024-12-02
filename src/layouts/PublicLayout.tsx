import { Outlet } from 'react-router-dom';
import { Footer } from '@/shared/components/core/Footer.tsx';
import { Header } from '@/shared/components/Header';

export const PublicLayout = () => {
  return (
    <div className="bg-gray-50">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
