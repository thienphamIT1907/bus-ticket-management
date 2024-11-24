import { notification } from 'antd';
import React, { createContext } from 'react';

export const NotificationContext = createContext({});

export const AntdNotificationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [antdNotificationApi, contextHolder] = notification.useNotification();

  return (
    <NotificationContext.Provider value={antdNotificationApi}>
      {contextHolder}
      {children}
    </NotificationContext.Provider>
  );
};
