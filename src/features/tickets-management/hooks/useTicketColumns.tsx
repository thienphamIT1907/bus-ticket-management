import { TicketStatusTag } from '@/features/tickets-management/components/TicketStatusTag';
import { TicketStatus, type Ticket } from '@/shared/types';
import { formatCurrency } from '@/shared/utils';
import { Button, Flex, Typography } from 'antd';
import type { ColumnGroupType, ColumnType } from 'antd/es/table';

const { Text } = Typography;

export const useTicketColumns = () => {
  const TOUR_COLUMN: ColumnType<Ticket> = {
    title: 'Lộ Trình',
    dataIndex: 'tours',
    ellipsis: true,
    width: 100,
    render: (tours: Ticket['tours']) => (
      <Text>
        {tours?.routes?.start_point}
        {` - `}
        {tours?.routes?.end_point}
      </Text>
    ),
  };
  const CLIENT_NAME_COLUMN: ColumnType<Ticket> = {
    title: 'Khách hàng',
    dataIndex: 'client_name',
    ellipsis: true,
    width: 100,
    render: (clientName: Ticket['client_name']) => <Text>{clientName}</Text>,
  };
  const CLIENT_EMAIL_COLUMN: ColumnType<Ticket> = {
    title: 'Email',
    dataIndex: 'client_email',
    ellipsis: true,
    width: 100,
    render: (clientEmail) => <Text>{clientEmail}</Text>,
  };
  const CLIENT_PHONE_COLUMN: ColumnType<Ticket> = {
    title: 'SDT',
    dataIndex: 'client_phone',
    ellipsis: true,
    width: 100,
    render: (clientPhone) => <Text>{clientPhone}</Text>,
  };
  const PRICE_COLUMN: ColumnType<Ticket> = {
    title: 'Giá',
    dataIndex: 'price',
    ellipsis: true,
    width: 100,
    align: 'right',
    render: (price) => (
      <Text className="font-bold">{formatCurrency(Number(price))} VND</Text>
    ),
  };
  const CODE: ColumnType<Ticket> = {
    title: 'Code',
    dataIndex: 'code',
    ellipsis: true,
    render: (code) => <Text className="underline">{code}</Text>,
  };
  const CHECKIN_AT_COLUMN: ColumnType<Ticket> = {
    title: 'Checkin',
    dataIndex: 'checkin_at',
    ellipsis: true,
    width: 100,
    render: (checkinAt) => <Text>{checkinAt || '-'}</Text>,
  };
  const STATUS_COLUMN: ColumnType<Ticket> = {
    title: 'Trạng thái',
    dataIndex: 'status',
    ellipsis: true,
    width: 100,
    fixed: 'right',
    render: (status) => (
      <>
        <TicketStatusTag status={status} />
      </>
    ),
  };
  const ACTIONS_COLUMN: ColumnType<Ticket> = {
    title: '',
    width: 100,
    fixed: 'right',
    render: (_, record: Ticket) => {
      const disableStatus = [TicketStatus.Cancelled, TicketStatus.Finish];
      const canCancelTicket = disableStatus.includes(
        record?.status as TicketStatus,
      );
      const canFinishTicket = record?.status === TicketStatus.Checkin;

      return (
        <Flex gap={6}>
          <Button disabled={canCancelTicket}>Huỷ vé</Button>
          <Button hidden={!canFinishTicket} type="primary">
            Hoàn thành
          </Button>
        </Flex>
      );
    },
  };

  const columns = [
    TOUR_COLUMN,
    CLIENT_NAME_COLUMN,
    CLIENT_EMAIL_COLUMN,
    CLIENT_PHONE_COLUMN,
    PRICE_COLUMN,
    CODE,
    CHECKIN_AT_COLUMN,
    STATUS_COLUMN,
    ACTIONS_COLUMN,
  ];

  return {
    columns: columns as (ColumnGroupType | ColumnType)[],
  };
};
