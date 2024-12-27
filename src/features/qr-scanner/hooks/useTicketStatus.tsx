import { QueryKeys } from '@/features/homepage/api/queryKeys';
import { useToast } from '@/shared/hooks';
import type { Ticket } from '@/shared/types';
import { TicketStatus, DataTable } from '@/shared/types';
import supabase from '@/shared/utils/supbabase';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

export const useTicketStatus = () => {
  const { showToast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const queryClient = useQueryClient();

  const handleSetTicketStatus = async (
    status: TicketStatus,
    selectedTicket?: Ticket,
  ) => {
    if (!selectedTicket) {
      showToast({
        type: 'error',
        message: 'Error',
        description: 'Thông tin vé xe lỗi!',
      });
      return;
    }
    let message = `Checkin thành công!`;
    if (status === TicketStatus.Cancelled) {
      message = `Huỷ vé thành công!`;
    }
    if (status === TicketStatus.Finish) {
      message = `Hoàn thành chuyến xe!`;
    }

    const { error } = await supabase
      .from(DataTable.TICKETS)
      .update({
        status,
      })
      .eq('id', selectedTicket?.id);

    if (error) {
      showToast({
        type: 'error',
        message: 'Error',
        description: error?.message,
      });
    }
    queryClient.invalidateQueries({ queryKey: [QueryKeys.tickets] });
    setIsLoading(false);
    showToast({
      type: 'success',
      message,
    });
  };

  return {
    isLoading,
    handleSetTicketStatus,
  };
};
