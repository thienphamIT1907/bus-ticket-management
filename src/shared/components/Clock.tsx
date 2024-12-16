import { Typography } from 'antd';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

const { Text } = Typography;

export const Clock = () => {
  const [dateTime, setDateTime] = useState<string>(
    dayjs().format('HH:mm:ss | DD/MM/YYYY'),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(dayjs().format('HH:mm:ss | DD/MM/YYYY'));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <Text className="text-xl font-bold">{dateTime}</Text>;
};
