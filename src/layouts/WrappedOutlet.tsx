import type { SidebarContextValue } from '@/providers';
import { SidebarContext } from '@/providers';
import { useContext } from 'react';
import { Outlet } from 'react-router-dom';

export const WrappedOutlet = () => {
  const { setIsCollapsed, isCollapsed } = useContext(
    SidebarContext,
  ) as SidebarContextValue;
  return (
    <div
      aria-hidden
      onClick={() => {
        if (!isCollapsed) setIsCollapsed(true);
      }}
    >
      <Outlet />
    </div>
  );
};
