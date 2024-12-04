import { SideBarMenu } from '@/shared/types';
import { TourManagementPage } from '@/pages/TourManagementPage.tsx';
import { DriverManagementPage } from '@/pages/DriverManagementPage.tsx';
import { VehicleManagementPage } from '@/pages/VehicleManagementPage.tsx';
import { BusCompaniesManagementPage } from '@/pages/BusCompaniesManagementPage';
import { FaRegMap } from 'react-icons/fa';
import { GrUserPolice } from 'react-icons/gr';
import { TbBus } from 'react-icons/tb';
import { GrPieChart } from 'react-icons/gr';
import { RiTeamLine } from 'react-icons/ri';
import { SummaryPage } from '@/pages/SummaryPage';

export const PRIVATE_ROUTES = [
  {
    path: 'summary',
    element: <SummaryPage />,
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
  {
    path: 'bus-companies-management',
    element: <BusCompaniesManagementPage />,
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
    href: 'tour-management',
  },
  {
    id: 3,
    Icon: <RiTeamLine size={20} />,
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
];
