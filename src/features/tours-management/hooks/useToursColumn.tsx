import { TableActions } from '@/shared/components/core/TableActions';
import { DATE_TIME_FORMAT } from '@/shared/constants/datetime';
import type { Tour } from '@/shared/types';
import { Flex, Typography } from 'antd';
import type { ColumnGroupType, ColumnType } from 'antd/es/table';
import dayjs from 'dayjs';

const { Text } = Typography;

type Props = {
  onDelete: (tourId?: string) => void;
  onUpdate: (tour?: Tour) => void;
};

export const useToursColumn = ({ onDelete, onUpdate }: Props) => {
  const ROUTE_COLUMN: ColumnType<Tour> = {
    title: 'Lộ Trình',
    dataIndex: 'routes',
    ellipsis: true,
    width: 100,
    render: (routes: Tour['routes']) => (
      <Text>{`${routes?.start_point} - ${routes?.end_point}`}</Text>
    ),
  };
  const DISTANCE_COLUMN: ColumnType<Tour> = {
    title: 'Khoảng cách (km)',
    dataIndex: 'routes',
    align: 'right',
    ellipsis: true,
    render: (routes: Tour['routes']) => <Text>{routes?.est_distance}</Text>,
  };
  const BUS_COLUMN: ColumnType<Tour> = {
    title: 'Phương tiện',
    dataIndex: 'buses',
    ellipsis: true,
    render: (buses: Tour['buses']) => (
      <Flex vertical justify="flex-start" align="flex-start">
        <Text className="font-medium underline">{buses?.plate_number}</Text>
        <Text>{buses?.type}</Text>
        <Text>{buses?.capacity} Chỗ</Text>
      </Flex>
    ),
  };

  const DRIVER_COLUMN: ColumnType<Tour> = {
    title: 'Tài xế',
    dataIndex: 'buses',
    ellipsis: true,
    render: (buses: Tour['buses']) => (
      <Flex vertical justify="flex-start" align="flex-start">
        <Text className="font-medium underline">{`${buses?.drivers?.first_name} ${buses?.drivers?.last_name}`}</Text>
        <Text>{buses?.drivers?.email}</Text>
        <Text>{buses?.drivers?.phone}</Text>
      </Flex>
    ),
  };

  const TIME_TO_GO_COLUMN: ColumnType<Tour> = {
    title: 'Khởi hành',
    dataIndex: 'time_to_go',
    ellipsis: true,
    render: (timeToGo: Tour['time_to_go']) => (
      <Text>
        {dayjs(timeToGo as string).format(DATE_TIME_FORMAT.DD_MM_YYYY_HH_MM_SS)}
      </Text>
    ),
  };

  const COMPANY_COLUMN: ColumnType<Tour> = {
    title: 'Nhà xe',
    dataIndex: 'buses',
    ellipsis: true,
    render: (buses: Tour['buses']) => (
      <Text className="font-bold">{buses?.companies?.name}</Text>
    ),
  };

  const PRICE_COLUMN: ColumnType<Tour> = {
    title: 'Giá',
    dataIndex: 'price',
    ellipsis: true,
    fixed: 'right',
    render: (price: Tour['price']) => (
      <Text className="font-bold">{price || 0} VND</Text>
    ),
  };

  const ACTIONS_COLUMN: ColumnType<Tour> = {
    title: '',
    width: 50,
    fixed: 'right',
    render: (_, record: Tour) => (
      <TableActions
        onDelete={() => onDelete(record?.id || '')}
        onEdit={() => onUpdate(record)}
      />
    ),
  };

  const columns = [
    COMPANY_COLUMN,
    ROUTE_COLUMN,
    DISTANCE_COLUMN,
    BUS_COLUMN,
    DRIVER_COLUMN,
    TIME_TO_GO_COLUMN,
    PRICE_COLUMN,
    ACTIONS_COLUMN,
  ];
  return {
    columns: columns as (ColumnGroupType | ColumnType)[],
  };
};
