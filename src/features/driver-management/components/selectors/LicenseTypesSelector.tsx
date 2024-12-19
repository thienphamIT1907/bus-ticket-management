import type { SelectProps } from 'antd';
import { Select } from 'antd';
import { FaCheck } from 'react-icons/fa6';

const LICENSE_TYPE_OPTIONS = [
  {
    label: 'Hạng B1 số tự động',
    value: 'Hạng B1 số tự động',
  },
  {
    label: 'Hạng B1 số sàn',
    value: 'Hạng B1 số sàn',
  },
  {
    label: 'Hạng B2',
    value: 'Hạng B2',
  },
  {
    label: 'Hạng C',
    value: 'Hạng C',
  },
  {
    label: 'Hạng D',
    value: 'Hạng D',
  },
  {
    label: 'Hạng E',
    value: 'Hạng E',
  },
];

type Props = {} & SelectProps;

export const LicenseTypesSelector = ({ ...props }: Props) => (
  <Select
    {...props}
    menuItemSelectedIcon={<FaCheck className="size-5 text-green-600" />}
    options={LICENSE_TYPE_OPTIONS}
    showSearch={false}
    size="large"
  />
);
