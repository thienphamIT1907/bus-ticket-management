import { ReactNode } from 'react';

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
