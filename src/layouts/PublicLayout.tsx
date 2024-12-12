import { Outlet, useLocation } from 'react-router-dom';
import { Footer } from '@/shared/components/core/Footer.tsx';
import { Header } from '@/shared/components/Header';

export const PublicLayout = () => {
  const location = useLocation();
  const isIgnoreLayout = location.pathname === '/dashboard/login';

  if (isIgnoreLayout) {
    return <Outlet />;
  }

  return (
    <div className="bg-gray-50">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
