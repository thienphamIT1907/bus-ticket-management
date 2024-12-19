import { ConfigProvider, notification } from 'antd';
import React, { createContext } from 'react';

export const NotificationContext = createContext({});

export const AntdNotificationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [antdNotificationApi, contextHolder] = notification.useNotification();

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#c35959',
          fontSize: 16,
        },
      }}
    >
      <NotificationContext.Provider value={antdNotificationApi}>
        {contextHolder}
        {children}
      </NotificationContext.Provider>
    </ConfigProvider>
  );
};
