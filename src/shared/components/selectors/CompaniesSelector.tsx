import { useGetBusCompany } from '@/features/bus-companies-management/hooks/useGetBusCompany';
import type { SelectProps } from 'antd';
import { Select } from 'antd';
import { FaCheck } from 'react-icons/fa6';

type Props = {} & SelectProps;

export const CompaniesSelector = ({ ...props }: Props) => {
  const { data, isFetching } = useGetBusCompany();

  const dataOptions = data?.map((item) => ({
    label: item?.name,
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
      placeholder="Chọn nhà xe"
      allowClear
    />
  );
};
