import { useGetBusRoutes } from '@/features/routes-management/hooks/useGetBusRoutes';
import { Select, type SelectProps } from 'antd';
import { FaCheck } from 'react-icons/fa6';

type Props = {} & SelectProps;
export const RouteSelector = ({ ...props }: Props) => {
  const { data, isFetching } = useGetBusRoutes();

  const dataOptions = data?.map((item) => ({
    label: `${item?.start_point} - ${item?.end_point} (${item?.est_distance} km)`,
    value: item?.id,
  }));

  return (
    <Select
      {...props}
      menuItemSelectedIcon={<FaCheck className="size-5 text-green-600" />}
      options={dataOptions}
      showSearch={false}
      size="large"
      loading={isFetching}
      allowClear
    />
  );
};
