import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import SidebarMenu from '@/features/dashboard/components/Sidebar.tsx';
import Header from '@/features/dashboard/components/Header';
import SidebarProvider from '@/providers/SidebarProvider';

export const PrivateLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log('run');
    if (
      location.pathname === '/dashboard' ||
      location.pathname === '/dashboard/'
    ) {
      navigate('/dashboard/summary');
    }
  }, []);
  return (
    <SidebarProvider>
      <main className="flex bg-gray-100">
        <SidebarMenu />
        <div className="flex h-screen w-full flex-col gap-4 overflow-hidden overflow-y-auto p-3">
          <Header />
          <div className="scrollbar-gutter size-full overflow-y-auto rounded-lg bg-white p-6 shadow-sm">
            <Outlet />
          </div>
        </div>
      </main>
    </SidebarProvider>
  );
};
