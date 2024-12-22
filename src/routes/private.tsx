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
import { GiDetour } from 'react-icons/gi';
import { ToursManagementPage } from '@/pages/ToursManagementPage';
import { IoTicketOutline } from 'react-icons/io5';
import { TicketManagementPage } from '@/pages/TicketManagementPage';

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
  {
    path: 'tour-management',
    element: <ToursManagementPage />,
  },
  {
    path: 'tickets-management',
    element: <TicketManagementPage />,
  },
];

export const SIDEBAR_ROUTES: SideBarMenu[] = [
  {
    id: 'summary',
    Icon: <GrPieChart size={20} />,
    title: 'Thống Kê',
    isActive: true,
    href: 'summary',
  },
  {
    id: 21,
    Icon: <IoTicketOutline size={20} />,
    title: 'Vé Xe',
    isActive: true,
    href: 'tickets-management',
  },
  {
    id: 2,
    Icon: <FaRegMap size={20} />,
    title: 'Tuyến Đường',
    isActive: true,
    href: 'routes-management',
  },
  {
    id: 'tour-management',
    Icon: <GiDetour size={20} />,
    title: 'Lộ Trình',
    isActive: true,
    href: 'tour-management',
  },
  {
    id: 'bus-companies-management',
    Icon: <PiBuildingOffice size={20} />,
    title: 'Nhà Xe',
    isActive: true,
    href: 'bus-companies-management',
  },
  {
    id: 'driver-management',
    Icon: <GrUserPolice size={20} />,
    title: 'Tài Xế',
    isActive: true,
    href: 'driver-management',
  },
  {
    id: 'vehicle-management',
    Icon: <TbBus size={20} />,
    title: 'Phương Tiện',
    isActive: true,
    href: 'vehicle-management',
  },
  {
    id: 'bus-comforts-management',
    Icon: <LuLeaf size={20} />,
    title: 'Tiện Ích',
    isActive: true,
    href: 'bus-comforts-management',
  },
];
