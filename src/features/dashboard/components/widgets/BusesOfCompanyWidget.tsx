import { Flex, Typography } from 'antd';
import EChartsReact from 'echarts-for-react';

const { Text } = Typography;

export const BusesOfCompanyWidget = () => {
  const option = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      x: 'center',
      y: 'bottom',
      orient: 'horizontal',
    },
    series: [
      {
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: true,
        center: ['50%', '40%'],
        padAngle: 5,
        itemStyle: {
          borderRadius: 10,
        },
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: false,
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 4, name: 'Phương Trang' },
          { value: 2, name: 'Hoàng Long' },
          { value: 1, name: 'Bảo Cúc' },
          { value: 1, name: 'Minh Tâm' },
          { value: 4, name: 'Thành Bưởi' },
          { value: 1, name: 'Sơn Tùng' },
          { value: 1, name: 'Kính Diên Hồng' },
        ],
      },
    ],
  };
  return (
    <Flex vertical>
      <Text className="p-1 text-2xl font-bold">Tổng số phương tiện</Text>
      <div className="rounded-xl border border-solid border-gray-200">
        <EChartsReact option={option} className="h-full" />
      </div>
    </Flex>
  );
};
