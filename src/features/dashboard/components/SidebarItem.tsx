import {
  SidebarContext,
  SidebarContextValue,
} from '@/providers/SidebarProvider';
import { useContext, useEffect } from 'react';
import { cn } from '@/libs/tailwind.ts';
import { Tooltip } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SideBarMenu } from '@/shared/types';

type SidebarItemProps = Omit<SideBarMenu, 'id'>;

const SidebarItem = ({
  title,
  Icon,
  href,
  isActive = false,
}: SidebarItemProps) => {
  const { isCollapsed } = useContext(SidebarContext) as SidebarContextValue;
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isActive) {
      navigate('/dashboard/summary');
    }
  }, []);

  return (
    <>
      {isActive && (
        <Tooltip title={isCollapsed && title} placement="right">
          <Link to={href}>
            <div
              className={cn(
                'mt-1 flex w-full items-center justify-start gap-x-4 rounded-lg p-4 transition-all',
                pathname?.split('/')?.at(2) === href
                  ? 'bg-[#d84f57] text-white shadow-md shadow-[#f3969c]'
                  : 'transition-all hover:bg-gray-200',
              )}
            >
              <span className="max-w-6">{Icon}</span>

              <span
                className={cn(
                  'truncate',
                  isCollapsed && 'opacity-0 duration-300',
                )}
              >
                {title}
              </span>
            </div>
          </Link>
        </Tooltip>
      )}
    </>
  );
};

export default SidebarItem;
