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
      className="scrollbar-gutter size-full overflow-y-auto rounded-lg bg-white p-6 shadow-sm"
      onClick={() => {
        if (!isCollapsed) setIsCollapsed(true);
      }}
    >
      <Outlet />
    </div>
  );
};
