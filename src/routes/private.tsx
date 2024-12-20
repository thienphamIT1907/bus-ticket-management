import type { SideBarMenu } from '@/shared/types';
import { DriverManagementPage } from '@/pages/DriverManagementPage.tsx';
import { VehicleManagementPage } from '@/pages/VehicleManagementPage.tsx';
import { BusCompaniesManagementPage } from '@/pages/BusCompaniesManagementPage';
import { FaRegMap } from 'react-icons/fa';
import { GrUserPolice, GrPieChart } from 'react-icons/gr';
import { TbBus } from 'react-icons/tb';
import { SummaryPage } from '@/pages/SummaryPage';
import { RoutesManagementPage } from '@/pages/RoutesManagementPage';
import { LuLeaf } from 'react-icons/lu';
import { BusComfortsManagementPage } from '@/pages/BusComfortsManagementPage';
import { PiBuildingOffice } from 'react-icons/pi';

export const PRIVATE_ROUTES = [
  {
    path: 'summary',
    element: <SummaryPage />,
  },
  {
    path: 'routes-management',
    element: <RoutesManagementPage />,
  },
  {
    path: 'driver-management',
    element: <DriverManagementPage />,
  },
  {
    path: 'vehicle-management',
    element: <VehicleManagementPage />,
  },
  {
    path: 'bus-companies-management',
    element: <BusCompaniesManagementPage />,
  },
  {
    path: 'bus-comforts-management',
    element: <BusComfortsManagementPage />,
  },
];

export const SIDEBAR_ROUTES: SideBarMenu[] = [
  {
    id: 1,
    Icon: <GrPieChart size={20} />,
    title: 'Thống Kê',
    isActive: true,
    href: 'summary',
  },
  {
    id: 2,
    Icon: <FaRegMap size={20} />,
    title: 'Tuyến Đường',
    isActive: true,
    href: 'routes-management',
  },
  {
    id: 3,
    Icon: <PiBuildingOffice size={20} />,
    title: 'Nhà Xe',
    isActive: true,
    href: 'bus-companies-management',
  },
  {
    id: 4,
    Icon: <GrUserPolice size={20} />,
    title: 'Tài Xế',
    isActive: true,
    href: 'driver-management',
  },
  {
    id: 5,
    Icon: <TbBus size={20} />,
    title: 'Phương Tiện',
    isActive: true,
    href: 'vehicle-management',
  },
  {
    id: 6,

    Icon: <LuLeaf size={20} />,
    title: 'Tiện Ích',
    isActive: true,
    href: 'bus-comforts-management',
  },
];
