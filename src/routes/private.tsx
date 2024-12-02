import { SideBarMenu } from '@/shared/types';
import { TourManagementPage } from '@/pages/TourManagementPage.tsx';
import { DriverManagementPage } from '@/pages/DriverManagementPage.tsx';
import { VehicleManagementPage } from '@/pages/VehicleManagementPage.tsx';

import { FaRegMap } from 'react-icons/fa';
import { GrUserPolice } from 'react-icons/gr';
import { TbBus } from 'react-icons/tb';
import { GrPieChart } from 'react-icons/gr';

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
  {},
];

export const SIDEBAR_ROUTES: SideBarMenu[] = [
  {
    id: 1,
    Icon: <GrPieChart size={20} />,
    title: 'Thống kê dữ liệu',
    isActive: true,
    href: 'summary',
  },
  {
    id: 2,
    Icon: <FaRegMap size={20} />,
    title: 'Quản lý tuyến đường',
    isActive: true,
    href: 'tour-management',
  },
  {
    id: 3,
    Icon: <GrUserPolice size={20} />,
    title: 'Quản lý tài xế',
    isActive: true,
    href: 'driver-management',
  },
  {
    id: 4,
    Icon: <TbBus size={20} />,
    title: 'Quản lý phương tiện',
    isActive: true,
    href: 'vehicle-management',
  },
];
