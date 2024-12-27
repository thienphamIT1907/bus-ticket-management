import { Flex, Typography } from 'antd';
import EChartsReact from 'echarts-for-react';

const { Text } = Typography;

export const HighLevelDriverWidget = () => {
  const option = {
    xAxis: {
      type: 'category',
      data: ['1 năm', '3 năm', '5 năm', '7 năm', '9 năm'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [3, 5, 2, 8, 4],
        type: 'bar',
        barWidth: 40,
        label: {
          show: true,
          fontSize: 14,
        },
        tooltip: {
          position: ['50%', '50%'],
        },
        itemStyle: {
          color: '#d84f57',
          borderRadius: [5, 5, 0, 0],
        },
      },
    ],
  };
  return (
    <Flex vertical>
      <Text className="p-1 text-2xl font-bold">Kinh nghiệm tài xế</Text>
      <div className="rounded-xl border border-solid border-gray-200">
        <EChartsReact option={option} className="h-full" />
      </div>
    </Flex>
  );
};
