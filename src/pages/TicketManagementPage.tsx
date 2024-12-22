import { useGetTickets } from '@/features/tickets-management/hooks/useGetTickets';
import { useTicketColumns } from '@/features/tickets-management/hooks/useTicketColumns';
import { BaseTable } from '@/shared/components/core/BaseTable';
import { TableTitle } from '@/shared/components/TableTitle';
import { Flex } from 'antd';

export const TicketManagementPage = () => {
  const { columns } = useTicketColumns();
  const { data, isFetching } = useGetTickets();

  return (
    <>
      <Flex vertical>
        <Flex justify="space-between" className="w-full">
          <TableTitle title="Quản Lý Vé Xe" className="text-2xl" />
        </Flex>
        <div className="mt-10">
          <BaseTable dataSource={data} columns={columns} loading={isFetching} />
        </div>
      </Flex>
    </>
  );
};
