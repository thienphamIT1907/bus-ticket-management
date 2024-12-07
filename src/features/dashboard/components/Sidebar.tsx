import { useContext } from 'react';
import { cn } from '@/libs/tailwind.ts';
import { SIDEBAR_ROUTES } from '@/routes/private.tsx';
import SidebarItem from '@/features/dashboard/components/SidebarItem.tsx';
import { Flex, Typography } from 'antd';
import { Logo } from '@/shared/components/core/Logo.tsx';
import { SidebarContext, SidebarContextValue } from '@/providers';

const { Text } = Typography;

const SidebarMenu = () => {
  const { isCollapsed } = useContext(SidebarContext) as SidebarContextValue;

  return (
    <div
      className={cn(
        'flex size-full h-screen w-full max-w-[230px] flex-col justify-between gap-y-4 overflow-hidden overflow-y-auto rounded-lg py-4 pl-2 transition-all duration-500 ease-in-out',
        {
          'max-w-[63px]': isCollapsed,
        },
      )}
    >
      <div>
        <Flex gap={6} justify="flex-start" align="center" className="px-3">
          <Logo className="size-10 text-[#c35959]" />
          <Text
            className={cn(
              'truncate text-center text-xl font-bold text-[#c35959]',
              isCollapsed && 'hidden',
            )}
          >
            CS447 Bus
          </Text>
        </Flex>
        <div className="mt-[25px] flex flex-col gap-y-2">
          {SIDEBAR_ROUTES.map(({ Icon, title, isActive, id, href }) => (
            <SidebarItem
              Icon={Icon}
              href={href}
              isActive={isActive}
              key={id}
              title={title}
            />
          ))}
        </div>
      </div>
      {/* <div> */}
      {/* <hr /> */}
      {/* <Button>SettingBut</Button> */}
      {/* <Button>LogoutButton</Button> */}
      {/*<SettingsButton />*/}
      {/*<LogoutButton />*/}
      {/* </div> */}
    </div>
  );
};

export default SidebarMenu;
