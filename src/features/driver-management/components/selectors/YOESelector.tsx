import type { SelectProps } from 'antd';
import { Select } from 'antd';
import { FaCheck } from 'react-icons/fa6';

const YOE_OPTIONS = [
  {
    label: 'Khoảng 1 năm',
    value: 'Khoảng 1 năm',
  },
  {
    label: 'Khoảng 3 năm',
    value: 'Khoảng 3 năm',
  },
  {
    label: 'Khoảng 5 năm',
    value: 'Khoảng 5 năm',
  },
  {
    label: 'Khoảng 7 năm',
    value: 'Khoảng 7 năm',
  },
  {
    label: 'Khoảng 9 năm',
    value: 'Khoảng 9 năm',
  },
];

type Props = {} & SelectProps;

export const YOESelector = ({ ...props }: Props) => (
  <Select
    {...props}
    menuItemSelectedIcon={<FaCheck className="size-5 text-green-600" />}
    options={YOE_OPTIONS}
    showSearch={false}
    size="large"
  />
);
