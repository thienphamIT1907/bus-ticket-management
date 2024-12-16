import { TableActions } from '@/shared/components/core/TableActions';
import type { Vehicle } from '@/shared/types';
import { Typography } from 'antd';
import type { ColumnGroupType, ColumnType } from 'antd/es/table';

const { Text } = Typography;

type Props = {
  onDelete: (routeId?: string) => void;
  onUpdate: (route?: Vehicle) => void;
};

export const useVehicleColumn = ({ onDelete, onUpdate }: Props) => {
  const PLATE_NUMBER_COLUMN: ColumnType<Vehicle> = {
    title: 'Biển số',
    dataIndex: 'plate_number',
    ellipsis: true,
    render: (plateNumber: Vehicle['plate_number']) => (
      <Text>{plateNumber}</Text>
    ),
  };

  const CAPACITY_COLUMN: ColumnType<Vehicle> = {
    title: 'Số chỗ',
    dataIndex: 'capacity',
    render: (capacity: Vehicle['capacity']) => <Text>{capacity}</Text>,
  };

  const COMPANY_COLUMN: ColumnType<Vehicle> = {
    title: 'Nhà xe',
    dataIndex: 'companies',
    ellipsis: true,
    render: (company: Vehicle['companies']) => (
      <Text>{company?.name || ''}</Text>
    ),
  };

  const TYPE_COLUMN: ColumnType<Vehicle> = {
    title: 'Loại',
    dataIndex: 'type',
    ellipsis: true,
    render: (type: Vehicle['type']) => <Text>{type}</Text>,
  };

  const DRIVER_COLUMN: ColumnType<Vehicle> = {
    title: 'Tài xế',
    fixed: 'right',
    dataIndex: 'driver_id',
    render: (driver: Vehicle['driver_id']) => <Text>{driver}</Text>,
  };

  const ACTIONS_COLUMN: ColumnType<Vehicle> = {
    title: '',
    width: 50,
    fixed: 'right',
    render: (_, record: Vehicle) => (
      <TableActions
        onDelete={() => onDelete(record?.id || '')}
        onEdit={() => onUpdate(record)}
      />
    ),
  };

  const columns = [
    PLATE_NUMBER_COLUMN,
    CAPACITY_COLUMN,
    COMPANY_COLUMN,
    TYPE_COLUMN,
    DRIVER_COLUMN,
    ACTIONS_COLUMN,
  ];
  return {
    columns: columns as (ColumnGroupType | ColumnType)[],
  };
};
