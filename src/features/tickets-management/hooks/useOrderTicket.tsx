import { useToast } from '@/shared/hooks';
import type { Ticket } from '@/shared/types';
import { DataTable } from '@/shared/types';
import supabase from '@/shared/utils/supbabase';
import { useForm } from 'antd/es/form/Form';
import { useState } from 'react';

type Props = {
  closeTicketModal: () => void;
  closeTourListmodal?: () => void;
  onOpenQRModal: () => void;
};

export const useOrderTicket = ({
  closeTicketModal,
  closeTourListmodal,
  onOpenQRModal,
}: Props) => {
  const [form] = useForm<Ticket>();
  const { showToast } = useToast();
  const [isOrdering, setIsOrdering] = useState(false);
  const handleOrderTicket = async (newTicket: Ticket) => {
    setIsOrdering(true);
    const { error } = await supabase.from(DataTable.TICKETS).insert(newTicket);

    if (error) {
      showToast({
        type: 'error',
        message: 'Error',
        description: error?.message,
      });
    }

    showToast({
      type: 'success',
      message: 'Đặt vé thành công!',
      description: 'Nhân viên phòng vé sẽ liên lạc lại để xác nhận thông tin',
    });
    setIsOrdering(false);
    closeTicketModal();
    closeTourListmodal?.();
    onOpenQRModal();
  };
  return {
    form,
    isOrdering,
    handleOrderTicket,
  };
};
