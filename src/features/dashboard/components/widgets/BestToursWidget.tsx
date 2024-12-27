import { Flex, Typography } from 'antd';

const { Text } = Typography;

export const BestToursWidget = () => (
  <Flex vertical>
    <Text className="p-1 text-2xl font-bold">Chuyến đi phổ biến</Text>
    <div className="rounded-xl border border-solid border-gray-200 p-1" />
  </Flex>
);
