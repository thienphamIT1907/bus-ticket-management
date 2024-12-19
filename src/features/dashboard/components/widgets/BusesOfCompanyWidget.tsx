import ReactEcharts from 'echarts-for-react';

export const BusesOfCompanyWidget = () => {
  const option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
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
    <div className="rounded-xl border border-solid border-gray-200">
      <ReactEcharts option={option} />
    </div>
  );
};
