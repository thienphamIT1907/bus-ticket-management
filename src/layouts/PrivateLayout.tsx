import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Sidebar } from '@/shared/components';
import SidebarMenu from '@/features/dashboard/components/Sidebar.tsx';

export const PrivateLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log('run');
    if (location.pathname === '/dashboard') {
      navigate('/dashboard/summary');
    }
  }, []);
  return (
    <div className="flex h-screen w-screen flex-shrink overflow-hidden">
      <SidebarMenu />

      <div className="scrollbar-gutter-stable w-full overflow-auto transition-all duration-300 ease-in-out">
        <Outlet />
      </div>
    </div>
  );
};
