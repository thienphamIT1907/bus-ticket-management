import { Image, Switch, Typography } from 'antd';
import type { ColumnGroupType, ColumnType } from 'antd/es/table';
import { TableActions } from '@/shared/components/core/TableActions';
import dayjs from 'dayjs';
import type { BusCompany } from '@/shared/types';
import { DATE_TIME_FORMAT } from '@/shared/constants/datetime';

const { Text } = Typography;

type Props = {
  onDelete: (companyId?: string) => void;
  onUpdate: (company?: BusCompany) => void;
  onToggle: (isToggle: boolean, selectedCompany: BusCompany) => void;
};

export const useBusCompanyColumns = ({
  onDelete,
  onUpdate,
  onToggle,
}: Props) => {
  const NAME_COLUMN: ColumnType<BusCompany> = {
    title: 'Tên nhà xe',
    dataIndex: 'name',
    ellipsis: true,
    render: (name: BusCompany['name']) => <Text>{name}</Text>,
  };

  const ADDRESS_COLUMN: ColumnType<BusCompany> = {
    title: 'Địa chỉ',
    dataIndex: 'address',
    render: (address: BusCompany['address']) => <Text>{address}</Text>,
  };

  const BUSINESS_CODE_COLUMN: ColumnType<BusCompany> = {
    title: 'Mã số Kinh doanh',
    dataIndex: 'business_code',
    ellipsis: true,
    render: (businessCode: BusCompany['business_code']) => (
      <Text>{businessCode}</Text>
    ),
  };

  const PHONE_COLUMN: ColumnType<BusCompany> = {
    title: 'SDT',
    dataIndex: 'phone',
    ellipsis: true,
    render: (name: BusCompany['name']) => <Text>{name}</Text>,
  };

  const EMAIL_COLUMN: ColumnType<BusCompany> = {
    title: 'Email',
    dataIndex: 'email',
    ellipsis: true,
    render: (name: BusCompany['name']) => <Text>{name}</Text>,
  };

  const AVATAR_COLUMN: ColumnType<BusCompany> = {
    title: 'Logo',
    dataIndex: 'avatar_base64',
    ellipsis: true,
    render: (logo: BusCompany['avatar_base64']) => (
      <Image
        src={
          logo ||
          'https://www.legrand.com.vn/modules/custom/legrand_ecat/assets/img/no-image.png'
        }
        alt={logo || 'image'}
        className="size-20 object-contain"
        preview={!!logo}
      />
    ),
  };

  const OWNER_COLUMN: ColumnType<BusCompany> = {
    title: 'Chủ sở hữu',
    dataIndex: 'owner',
    ellipsis: true,
    render: (owner: BusCompany['owner']) => <Text>{owner}</Text>,
  };

  const CREATED_AT_COLUMN: ColumnType<BusCompany> = {
    title: 'Ngày tạo',
    dataIndex: 'created_at',
    render: (createdAt: BusCompany['created_at']) => (
      <Text>{dayjs(createdAt).format(DATE_TIME_FORMAT.DD_MM_YYYY)}</Text>
    ),
  };

  const SPONSOR_COLUMN: ColumnType<BusCompany> = {
    title: 'Đối tác',
    dataIndex: 'is_sponsor',
    fixed: 'right',
    render: (isSponsor: BusCompany['is_sponsor'], record: BusCompany) => (
      <Switch
        defaultChecked={isSponsor || false}
        onChange={(value) => onToggle(value, record)}
      />
    ),
  };

  const ACTIONS_COLUMN: ColumnType<BusCompany> = {
    title: '',
    width: 50,
    fixed: 'right',
    render: (_, record: BusCompany) => (
      <TableActions
        onDelete={() => onDelete(record?.id)}
        onEdit={() => onUpdate(record)}
      />
    ),
  };

  const columns = [
    AVATAR_COLUMN,
    NAME_COLUMN,
    OWNER_COLUMN,
    BUSINESS_CODE_COLUMN,
    EMAIL_COLUMN,
    PHONE_COLUMN,
    ADDRESS_COLUMN,
    CREATED_AT_COLUMN,
    SPONSOR_COLUMN,
    ACTIONS_COLUMN,
  ];
  return {
    columns: columns as (ColumnGroupType | ColumnType)[],
  };
};
