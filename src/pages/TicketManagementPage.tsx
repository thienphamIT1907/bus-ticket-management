import { useTicketStatus } from '@/features/qr-scanner/hooks/useTicketStatus';
import { TicketCodeQRModal } from '@/features/tickets-management/components/TicketCodeQRModal';
import { useGetTickets } from '@/features/tickets-management/hooks/useGetTickets';
import { useTicketColumns } from '@/features/tickets-management/hooks/useTicketColumns';
import { BaseTable } from '@/shared/components/core/BaseTable';
import { TableTitle } from '@/shared/components/TableTitle';
import { useToggle } from '@/shared/hooks';
import type { Ticket } from '@/shared/types';
import { Flex } from 'antd';
import { useState } from 'react';

export const TicketManagementPage = () => {
  const { data, isFetching } = useGetTickets();
  const [selectedTicket, setSelectedTicket] = useState<Ticket | undefined>(
    undefined,
  );

  const { isLoading, handleSetTicketStatus } = useTicketStatus();

  const {
    onClose: closeQRCodeModal,
    onOpen: openQRCodeModal,
    open: isOpenQRCodeModal,
  } = useToggle();

  const handleOpenQRCodeModal = (selectedTicket: Ticket) => {
    setSelectedTicket(selectedTicket);
    openQRCodeModal();
  };

  const handleCloseQRCodeModal = () => {
    setSelectedTicket(undefined);
    closeQRCodeModal();
  };

  const { columns } = useTicketColumns({
    handleOpenQRCodeModal,
    handleSetTicketStatus,
    isLoading,
  });

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
      <TicketCodeQRModal
        isOpen={isOpenQRCodeModal}
        onClose={handleCloseQRCodeModal}
        value={selectedTicket?.code || ''}
        showHint={false}
        title={`Mã vé xe - ${selectedTicket?.client_name}`}
      />
    </>
  );
};
