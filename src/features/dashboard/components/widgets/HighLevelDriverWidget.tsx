import EChartsReact from 'echarts-for-react';

export const HighLevelDriverWidget = () => {
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
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' },
        ],
      },
    ],
  };
  return (
    <div className="rounded-xl border border-solid border-gray-200">
      <EChartsReact option={option} className="h-full" />
    </div>
  );
};
