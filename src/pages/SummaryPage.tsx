import { SummaryCard } from '@/shared/components/SummaryCard';
import { useGetBusSummary } from '@/features/summary/hooks/useGetBusSummary';
import { TableTitle } from '@/shared/components/TableTitle';
import { Col, Flex, Row, Spin } from 'antd';
import { BusesOfCompanyWidget } from '@/features/dashboard/components/widgets/BusesOfCompanyWidget';
import { HighLevelDriverWidget } from '@/features/dashboard/components/widgets/HighLevelDriverWidget';

export const SummaryPage = () => {
  const { isFetching, summary } = useGetBusSummary();
  return (
    <>
      <Flex vertical gap={20}>
        <Flex justify="space-between" className="w-full">
          <TableTitle title="Thống Kê" className="text-2xl" />
        </Flex>

        <Spin spinning={isFetching}>
          <Flex>
            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <SummaryCard diff={0} title="Chuyến xe" />
              <SummaryCard
                title="Nhà xe / Phương tiện"
                diff={0}
                total={`${summary?.companies} / ${summary?.buses}`}
              />
              <SummaryCard
                diff={0}
                title="Tuyến đường"
                total={summary?.routes}
              />
              <SummaryCard diff={0} title="Tài xế" total={summary?.drivers} />
            </div>
          </Flex>
        </Spin>

        <Row gutter={[24, 24]}>
          <Col lg={12} md={24} xl={16}>
            <BusesOfCompanyWidget />
          </Col>
          <Col lg={12} md={24} xl={8}>
            <HighLevelDriverWidget />
          </Col>
        </Row>
      </Flex>
    </>
  );
};
