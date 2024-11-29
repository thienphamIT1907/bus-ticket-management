import { FaReact } from 'react-icons/fa';
import { SideBarMenu } from '@/shared/types';
import { TourManagementPage } from '@/pages/TourManagementPage.tsx';
import { DriverManagementPage } from '@/pages/DriverManagementPage.tsx';
import { VehicleManagementPage } from '@/pages/VehicleManagementPage.tsx';

export const PRIVATE_ROUTES = [
  {
    path: 'summary',
    element: <>Summary page</>,
  },
  {
    path: 'tour-management',
    element: <TourManagementPage />,
  },
  {
    path: 'driver-management',
    element: <DriverManagementPage />,
  },
  {
    path: 'vehicle-management',
    element: <VehicleManagementPage />,
  },
  {}
];

export const SIDEBAR_ROUTES: SideBarMenu[] = [
  {
    id: 1,
    Icon: <FaReact size={25} />,
    title: 'Tổng quan',
    isActive: true,
    href: '/',
  },
  {
    id: 2,
    Icon: <FaReact size={25} />,
    title: 'Quản lý tuyến đường',
    isActive: false,
    href: '/tour-management',
  },
  {
    id: 3,
    Icon: <FaReact size={25} />,
    title: 'Quản lý tài xế',
    isActive: false,
    href: '/driver-management',
  },
  {
    id: 4,
    Icon: <FaReact size={25} />,
    title: 'Quản lý phương tiện',
    isActive: false,
    href: '/vehicle-management',
  },
];
