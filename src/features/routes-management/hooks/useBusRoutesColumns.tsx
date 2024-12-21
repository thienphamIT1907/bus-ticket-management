import { TableActions } from '@/shared/components/core/TableActions';
import type { BusRoute } from '@/shared/types';
import { Switch, Typography } from 'antd';
import type { ColumnGroupType, ColumnType } from 'antd/es/table';

const { Text } = Typography;

type Props = {
  onDelete: (routeId?: string) => void;
  onUpdate: (route?: BusRoute) => void;
  onToggle: (isToggle: boolean, selectedRoute: BusRoute) => void;
};

export const useBusRoutesColumns = ({
  onDelete,
  onUpdate,
  onToggle,
}: Props) => {
  const START_POINT_COLUMN: ColumnType<BusRoute> = {
    title: 'Điểm đi',
    dataIndex: 'start_point',
    ellipsis: true,
    render: (startPoint: BusRoute['start_point']) => <Text>{startPoint}</Text>,
  };

  const END_POINT_COLUMN: ColumnType<BusRoute> = {
    title: 'Điểm đến',
    dataIndex: 'end_point',
    render: (endPoint: BusRoute['end_point']) => <Text>{endPoint}</Text>,
  };

  const EST_DISTANCE_COLUMN: ColumnType<BusRoute> = {
    title: 'Khoảng cách dự tính (km)',
    dataIndex: 'est_distance',
    ellipsis: true,
    align: 'right',
    render: (estDistance: BusRoute['est_distance']) => (
      <Text>{estDistance}</Text>
    ),
  };

  const EST_HOUR_COLUMN: ColumnType<BusRoute> = {
    title: 'Thời gian dự tính (giờ)',
    dataIndex: 'est_time',
    ellipsis: true,
    align: 'right',
    render: (estTime: BusRoute['est_time']) => <Text>{estTime}</Text>,
  };

  const ACTIVE_COLUMN: ColumnType<BusRoute> = {
    title: 'Khả dụng',
    dataIndex: 'is_active',
    render: (isActive: BusRoute['is_active'], record: BusRoute) => (
      <Switch
        defaultChecked={isActive || false}
        onChange={(value) => onToggle(value, record)}
      />
    ),
  };

  const ACTIONS_COLUMN: ColumnType<BusRoute> = {
    title: '',
    width: 50,
    fixed: 'right',
    render: (_, record: BusRoute) => (
      <TableActions
        onDelete={() => onDelete(record?.id)}
        onEdit={() => onUpdate(record)}
      />
    ),
  };

  const columns = [
    START_POINT_COLUMN,
    END_POINT_COLUMN,
    EST_DISTANCE_COLUMN,
    EST_HOUR_COLUMN,
    ACTIVE_COLUMN,
    ACTIONS_COLUMN,
  ];
  return {
    columns: columns as (ColumnGroupType | ColumnType)[],
  };
};
