import { SummaryCard } from '@/shared/components/SummaryCard';
import { useGetBusSummary } from '@/features/summary/hooks/useGetBusSummary';
import { TableTitle } from '@/shared/components/TableTitle';
import { Flex, Spin } from 'antd';

export const SummaryPage = () => {
  const { isFetching, summary } = useGetBusSummary();
  return (
    <Spin spinning={isFetching}>
      <Flex vertical gap={20}>
        <Flex justify="space-between" className="w-full">
          <TableTitle title="Thống Kê" className="text-2xl" />
        </Flex>

        <Flex>
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <SummaryCard diff={0} title="Chuyến xe" />
            <SummaryCard diff={0} title="Phương tiện" />
            <SummaryCard diff={0} title="Tuyến đường" />
            <SummaryCard
              diff={0}
              title="Tiện ích"
              total={summary?.comforts}
              subTitle="So với tháng trước"
            />
          </div>
        </Flex>
      </Flex>
    </Spin>
  );
};
