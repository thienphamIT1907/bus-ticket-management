import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import SidebarMenu from '@/features/dashboard/components/Sidebar.tsx';
import Header from '@/features/dashboard/components/Header';
import SidebarProvider from '@/providers/SidebarProvider';
import { useSession } from '@/features/auth/hooks/useSession';
import { LoadingPanel } from '@/shared/components/LoadingPanel';

export const PrivateLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { session, isLoadingSession } = useSession();
  const isAuthenticated = session !== null;

  useEffect(() => {
    if (
      location.pathname === '/dashboard' ||
      location.pathname === '/dashboard/'
    ) {
      navigate('/dashboard/summary');
    }
  }, []);

  if (isLoadingSession) {
    return <LoadingPanel />;
  }

  return (
    <>
      {isAuthenticated ? (
        <SidebarProvider>
          <main className="flex bg-gray-100">
            <SidebarMenu />
            <div className="flex h-screen w-full flex-col gap-4 overflow-hidden overflow-y-auto rounded-xl p-3">
              <Header />
              <div className="scrollbar-gutter size-full overflow-y-auto rounded-lg bg-white p-6 shadow-sm">
                <Outlet />
              </div>
            </div>
          </main>
        </SidebarProvider>
      ) : (
        <Navigate to="/dashboard/login" />
      )}
    </>
  );
};
