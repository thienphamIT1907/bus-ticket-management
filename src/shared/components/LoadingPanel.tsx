import { Flex, Typography } from 'antd';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const { Text } = Typography;

export const LoadingPanel = () => (
  <Flex
    justify="center"
    align="center"
    className="h-screen overflow-hidden"
    gap={12}
  >
    <AiOutlineLoading3Quarters
      className="animate-spin rounded-full text-[#d84f57] shadow-lg"
      size={40}
    />
    <Text className="text-lg text-[#d84f57]">Loading...</Text>
  </Flex>
);
