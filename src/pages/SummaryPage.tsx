import { TableTitle } from '@/shared/components/TableTitle';
import { Flex } from 'antd';

export const SummaryPage = () => {
  return (
    <>
      <Flex>
        <Flex justify="space-between" className="w-full">
          <TableTitle title="Thống Kê" className="text-2xl" />
        </Flex>
      </Flex>
    </>
  );
};
