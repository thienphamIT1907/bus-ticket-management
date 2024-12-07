import { UserAvatar } from '@/features/dashboard/components/UserAvatar';
import {
  SidebarContext,
  SidebarContextValue,
} from '@/providers/SidebarProvider';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { useContext } from 'react';
import { cn } from '@/libs/tailwind';
import { useSession } from '@/features/auth/hooks/useSession';

const Header = () => {
  const { setIsCollapsed, isCollapsed } = useContext(
    SidebarContext,
  ) as SidebarContextValue;

  const handleClickCollapseSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex w-full items-center justify-between gap-x-8 rounded-md bg-white px-4 py-2 shadow-sm">
      <div className="flex items-center justify-center gap-x-4">
        <button
          className="border-none bg-transparent text-black outline-none focus:bg-none"
          onClick={handleClickCollapseSidebar}
        >
          <AiOutlineMenuFold
            className={cn('duration-300', isCollapsed && '-rotate-180')}
            size={20}
          />
        </button>
        <h2 className="xs:min-w-[200px] text-lg font-medium">Dashboard</h2>
      </div>
      <UserAvatar />
    </div>
  );
};

export default Header;
