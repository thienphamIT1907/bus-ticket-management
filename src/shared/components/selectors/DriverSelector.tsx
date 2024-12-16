import type { SelectProps } from 'antd';
import { Select } from 'antd';
import { FaCheck } from 'react-icons/fa6';

type Props = {} & SelectProps;

export const DriverSelector = ({ ...props }: Props) => (
  // const dataOptions = data?.map((item) => ({
  //   label: item?.name,
  //   value: item?.id,
  // }));

  <Select
    {...props}
    menuItemSelectedIcon={<FaCheck className="size-5 text-green-600" />}
    options={[]}
    showSearch={false}
    size="large"
    // loading={isFetching}
    placeholder="Chọn tài xế"
    allowClear
  />
);
