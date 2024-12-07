import Icon from '@ant-design/icons';
import { GetProps } from 'antd';
import { ReactNode } from 'react';

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
