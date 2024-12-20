import { Typography } from 'antd';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

const { Text } = Typography;

export const Clock = () => {
  const [dateTime, setDateTime] = useState<string>(
    dayjs().format('DD/MM/YYYY | HH:mm:ss '),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(dayjs().format('DD/MM/YYYY | HH:mm:ss'));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <Text className="text-2xl font-bold text-[#c35959]">{dateTime}</Text>;
};
