import {
  SidebarContext,
  SidebarContextValue,
} from '@/providers/SidebarProvider';
import { useContext } from 'react';
import { cn } from '@/libs/tailwind.ts';
import { Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import { SideBarMenu } from '@/shared/types';

type SidebarItemProps = Omit<SideBarMenu, 'id'>;

const SidebarItem = ({
  title,
  Icon,
  href,
  isActive = false,
}: SidebarItemProps) => {
  const { isCollapsed } = useContext(SidebarContext) as SidebarContextValue;
  const pathName = '';
  return (
    <Tooltip title={isCollapsed && title}>
      <Link to={href}>
        <div
          className={cn(
            'mt-1 flex w-full items-center justify-start gap-x-4 rounded-lg p-4 transition-all',
            pathName === href
              ? 'bg-[#0e172a] text-white shadow-md'
              : 'transition-all hover:bg-gray-200',
          )}
        >
          <span className="max-w-6">{Icon}</span>

          <span className={cn(isCollapsed && 'opacity-0 duration-300')}>
            {title}
          </span>
        </div>
      </Link>
    </Tooltip>
  );
};

export default SidebarItem;
