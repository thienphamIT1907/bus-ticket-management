import { TicketStatusTag } from '@/features/tickets-management/components/TicketStatusTag';
import { DATE_TIME_FORMAT } from '@/shared/constants/datetime';
import { TicketStatus, type Ticket } from '@/shared/types';
import { formatCurrency } from '@/shared/utils';
import { Button, Flex, Tooltip, Typography } from 'antd';
import type { ColumnGroupType, ColumnType } from 'antd/es/table';
import dayjs from 'dayjs';
import { BsQrCodeScan } from 'react-icons/bs';

const { Text } = Typography;

type Props = {
  handleOpenQRCodeModal: (selectedTicket: Ticket) => void;
  handleSetTicketStatus?: (
    status: TicketStatus,
    selectedTicket?: Ticket,
  ) => void;
  isLoading?: boolean;
};

export const useTicketColumns = ({
  handleOpenQRCodeModal,
  handleSetTicketStatus,
  isLoading,
}: Props) => {
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
  const CODE_COLUMN: ColumnType<Ticket> = {
    width: 220,
    title: 'Code',
    dataIndex: 'code',
    ellipsis: true,
    render: (code: Ticket['code'], record: Ticket) => (
      <Flex justify="flex-start" align="center" gap={6}>
        <BsQrCodeScan
          onClick={() => handleOpenQRCodeModal(record)}
          className="cursor-pointer duration-200 hover:scale-150 hover:text-[#c35959]"
        />
        <Tooltip title={code} placement="bottom">
          <>
            <Text className="cursor-pointer underline duration-150 ease-in-out hover:text-[#c35959]">
              {code?.slice(0, 15)}...
            </Text>
          </>
        </Tooltip>
      </Flex>
    ),
  };
  const CHECKIN_AT_COLUMN: ColumnType<Ticket> = {
    title: 'Checkin',
    dataIndex: 'checkin_at',
    ellipsis: true,
    width: 100,
    render: (checkinAt) => (
      <Text>
        {checkinAt
          ? dayjs(checkinAt).format(DATE_TIME_FORMAT.DD_MM_YYYY_HH_MM_SS)
          : '-'}
      </Text>
    ),
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
          <Button
            loading={isLoading}
            disabled={canCancelTicket}
            onClick={() =>
              handleSetTicketStatus?.(TicketStatus.Cancelled, record)
            }
          >
            Huỷ vé
          </Button>
          <Button
            loading={isLoading}
            hidden={!canFinishTicket}
            type="primary"
            onClick={() => handleSetTicketStatus?.(TicketStatus.Finish, record)}
          >
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
    CODE_COLUMN,
    CHECKIN_AT_COLUMN,
    STATUS_COLUMN,
    ACTIONS_COLUMN,
  ];

  return {
    columns: columns as (ColumnGroupType | ColumnType)[],
  };
};
