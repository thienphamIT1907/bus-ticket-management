import { UserAvatar } from '@/features/dashboard/components/UserAvatar';
import {
  SidebarContext,
  SidebarContextValue,
} from '@/providers/SidebarProvider';
import { upperCaseFirstLetter } from '@/shared/utils';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { cn } from '@/libs/tailwind';

const Header = () => {
  const { pathname } = useLocation();
  const { setIsCollapsed, isCollapsed } = useContext(
    SidebarContext,
  ) as SidebarContextValue;

  const generateHeaderByCurrentPathname = () => {
    let headerPrefix = 'Summary';
    const splittedPath: string = pathname.split('/')[1];
    if (splittedPath !== '') {
      headerPrefix = upperCaseFirstLetter(splittedPath);
    }

    return `My ${headerPrefix} Board`;
  };

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
        <h2 className="xs:min-w-[200px] text-lg font-medium">
          {/* {generateHeaderByCurrentPathname()} */}
          Dashboard
        </h2>
      </div>
      <UserAvatar />
    </div>
  );
};

export default Header;
