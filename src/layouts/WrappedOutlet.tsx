import { Outlet } from 'react-router-dom';

export const WrappedOutlet = () => (
  // const { setIsCollapsed, isCollapsed } = useContext(
  //   SidebarContext,
  // ) as SidebarContextValue;
  <div
    aria-hidden
    onClick={() => {
      // if (!isCollapsed) setIsCollapsed(true);
    }}
  >
    <Outlet />
  </div>
);
