import type Icon from '@ant-design/icons';
import type { GetProps } from 'antd';
import type { ReactNode } from 'react';

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
}
