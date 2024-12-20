import { Flex, Typography } from 'antd';
import { FaArrowUp } from 'react-icons/fa6';

const { Text } = Typography;

type Props = {
  title?: string;
  total?: number | string;
  subTitle?: string;
  diff?: number;
};

export const SummaryCard = ({ title, total, subTitle, diff }: Props) => (
  <Flex
    vertical
    align="flex-start"
    justify="flex-start"
    gap={4}
    className="rounded-xl border border-solid border-gray-200 px-4 py-2"
  >
    <Text className="text-gray-500">{title}</Text>
    <Text className="text-3xl font-bold">{total || 0}</Text>
    <Flex justify="center" align="center" gap={4}>
      {diff ? (
        <Flex
          className="w-fit flex-wrap rounded-xl border border-solid border-green-200 bg-green-100 px-1 text-xs"
          align="center"
          justify="flex-start"
        >
          <FaArrowUp className="text-green-600" />
          <Text className="text-xs font-medium text-green-600">12.52%</Text>
        </Flex>
      ) : null}
      {subTitle ? (
        <Text className="text-sm text-gray-400">{subTitle}</Text>
      ) : null}
    </Flex>
  </Flex>
);
