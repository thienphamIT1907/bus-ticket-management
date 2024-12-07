'use client';

import { createContext, useState } from 'react';
import type { BasicLayoutProps } from '@/shared/types';

export interface SidebarContextValue {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}

export const SidebarContext = createContext<SidebarContextValue | object>({});

const SidebarProvider = ({ children }: BasicLayoutProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <SidebarContext.Provider
      value={{
        isCollapsed,
        setIsCollapsed,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
