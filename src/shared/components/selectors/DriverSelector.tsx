import { useGetDrivers } from '@/features/driver-management/hooks/useGetDrivers';
import type { SelectProps } from 'antd';
import { Select } from 'antd';
import { FaCheck } from 'react-icons/fa6';

type Props = {} & SelectProps;

export const DriverSelector = ({ ...props }: Props) => {
  const { data, isFetching } = useGetDrivers();

  const dataOptions = data?.map((item) => ({
    label: `${item?.first_name} ${item?.last_name} - ${item?.yoe?.split(' ')[1]} năm kinh nghiệm`,
    value: item?.id,
  }));

  return (
    <Select
      {...props}
      menuItemSelectedIcon={<FaCheck className="size-5 text-green-600" />}
      options={dataOptions || []}
      showSearch
      size="large"
      loading={isFetching}
      placeholder="Chọn tài xế"
      allowClear
      optionFilterProp="label"
    />
  );
};
