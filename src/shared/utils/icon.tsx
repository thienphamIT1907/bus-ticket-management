import type { IconWrapperProps } from '@/shared/types';
import Icon from '@ant-design/icons';

export const IconWrapper = ({ svgComponent, ...props }: IconWrapperProps) => (
  <Icon component={svgComponent} {...props} />
);
