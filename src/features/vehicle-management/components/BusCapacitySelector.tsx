import type { SelectProps } from 'antd';
import { Select } from 'antd';
import { FaCheck } from 'react-icons/fa6';

const CAPACITY_OPTIONS = [
  {
    label: 16,
    value: 16,
  },
  {
    label: 32,
    value: 32,
  },
  {
    label: 64,
    value: 64,
  },
];

type Props = {} & SelectProps;

export const BusCapacitySelector = ({ ...props }: Props) => (
  <Select
    {...props}
    menuItemSelectedIcon={<FaCheck className="size-5 text-green-600" />}
    options={CAPACITY_OPTIONS}
    showSearch={false}
    size="large"
  />
);
