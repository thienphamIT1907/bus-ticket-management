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
  id: number | string;
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
  TOURS = 'tours',
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

export type Tour = Database['public']['Tables']['tours']['Row'] & {
  routes: BusRoute;
  buses: Vehicle & { drivers: Driver };
};

export type Driver = Database['public']['Tables']['drivers']['Row'];

export type SummaryData = {
  comforts?: number;
  vehicles?: number;
  buses?: number;
  drivers?: number;
  routes?: number;
  companies?: number;
};
