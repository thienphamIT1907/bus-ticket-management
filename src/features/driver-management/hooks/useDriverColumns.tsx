import { TableActions } from '@/shared/components/core/TableActions';
import { DATE_TIME_FORMAT } from '@/shared/constants/datetime';
import type { Driver } from '@/shared/types';
import { Typography } from 'antd';
import type { ColumnGroupType, ColumnType } from 'antd/es/table';
import dayjs from 'dayjs';

const { Text } = Typography;

type Props = {
  onDelete: (driverId?: string) => void;
  onUpdate: (driver?: Driver) => void;
};

export const useDriverColumns = ({ onDelete, onUpdate }: Props) => {
  const FULL_NAME_COLUMN: ColumnType<Driver> = {
    title: 'Tên tài Xế',
    dataIndex: 'id',
    ellipsis: true,
    render: (_, record: Driver) => (
      <Text>{`${record?.first_name} ${record?.last_name}`}</Text>
    ),
  };

  const YOE_COLUMN: ColumnType<Driver> = {
    title: 'Kinh nghiệm',
    dataIndex: 'yoe',
    render: (yoe: Driver['yoe']) => <Text>{yoe}</Text>,
  };

  const BIRTHDAY_COLUMN: ColumnType<Driver> = {
    title: 'Ngày sinh',
    dataIndex: 'birthday',
    ellipsis: true,
    render: (birthday: Driver['birthday']) => (
      <Text>{dayjs(birthday).format(DATE_TIME_FORMAT.DD_MM_YYYY)}</Text>
    ),
  };

  const ADDRESS_COLUMN: ColumnType<Driver> = {
    title: 'Địa chỉ',
    dataIndex: 'address',
    ellipsis: true,
    render: (address: Driver['address']) => <Text>{address}</Text>,
  };

  const EMAIL_COLUMN: ColumnType<Driver> = {
    title: 'Email',
    dataIndex: 'email',
    ellipsis: true,
    render: (email: Driver['email']) => <Text>{email}</Text>,
  };

  const PHONE_COLUMN: ColumnType<Driver> = {
    title: 'Tiện ích',
    dataIndex: 'phone',
    ellipsis: true,
    render: (phone: Driver['phone']) => <Text>{phone}</Text>,
  };

  const LICENSE_TYPE_COLUMN: ColumnType<Driver> = {
    title: 'Loại bằng lái',
    dataIndex: 'license_type',
    ellipsis: true,
    render: (licenseType: Driver['license_type']) => <Text>{licenseType}</Text>,
  };

  const ACTIONS_COLUMN: ColumnType<Driver> = {
    title: '',
    width: 50,
    fixed: 'right',
    render: (_, record: Driver) => (
      <TableActions
        onDelete={() => onDelete(record?.id || '')}
        onEdit={() => onUpdate(record)}
      />
    ),
  };

  const columns = [
    FULL_NAME_COLUMN,
    YOE_COLUMN,
    BIRTHDAY_COLUMN,
    ADDRESS_COLUMN,
    EMAIL_COLUMN,
    PHONE_COLUMN,
    LICENSE_TYPE_COLUMN,
    ACTIONS_COLUMN,
  ];
  return {
    columns: columns as (ColumnGroupType | ColumnType)[],
  };
};
