import type { ReactElement } from 'react';

export const renderDropdown = (menu: ReactElement, isLoading: boolean) =>
  isLoading ? <>Đang tải...</> : menu;
