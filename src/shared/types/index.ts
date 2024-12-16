import type Icon from '@ant-design/icons';
import type { GetProps } from 'antd';
import type { ReactNode } from 'react';
import type { Database } from '@/shared/types/database.types';

export type CustomIconProps = Partial<GetProps<typeof Icon>>;

export type IconWrapperProps = {
  svgComponent: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export type MonthsInYear =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export interface BasicLayoutProps {
  children: ReactNode;
}

export interface SideBarMenu {
  id: number;
  Icon: ReactNode;
  title: string;
  isActive: boolean;
  href: string;
}

export type LoginFormFields = {
  email: string;
  password: string;
};

export enum DataTable {
  BUSES = 'buses',
  COMPANIES = 'companies',
  DRIVERS = 'drivers',
  ROUTES = 'routes',
  TICKETS = 'tickets',
  COMFORTS = 'comforts',
  BUSES_COMFORTS = 'buses_comforts',
}

export type BusCompany = Database['public']['Tables']['companies']['Row'];

export type BusRoute = Database['public']['Tables']['routes']['Row'];

export type BusComfort = Database['public']['Tables']['comforts']['Row'];

export type Vehicle = Database['public']['Tables']['buses']['Row'] & {
  companies?: BusCompany;
  comforts?: string[];
  buses_comforts?: {
    comforts: BusComfort;
  }[];
};

export type SummaryData = {
  comforts?: number;
};
