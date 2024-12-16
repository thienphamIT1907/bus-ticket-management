import type { SelectProps } from 'antd';
import { Select } from 'antd';
import { FaCheck } from 'react-icons/fa6';

type Props = {} & SelectProps;

const TYPE_OPTIONS = [
  {
    label: 'Xe thường',
    value: 'Xe thường',
  },
  {
    label: 'Xe giường nằm',
    value: 'Xe giường nằm',
  },
  {
    label: 'Xe 2 tầng',
    value: 'Xe 2 tầng',
  },

  {
    label: 'Xe Limousine sang trọng',
    value: 'Xe Limousine sang trọng',
  },
];

export const TypesSelector = ({ ...props }: Props) => (
  <Select
    {...props}
    menuItemSelectedIcon={<FaCheck className="size-5 text-green-600" />}
    options={TYPE_OPTIONS}
    showSearch={false}
    size="large"
    placeholder="Chọn nhà xe"
    allowClear
  />
);
