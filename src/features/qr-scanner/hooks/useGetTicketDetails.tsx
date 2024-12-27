import { useToast } from '@/shared/hooks';
import type { Ticket } from '@/shared/types';
import { DataTable } from '@/shared/types';
import supabase from '@/shared/utils/supbabase';
import { useState } from 'react';

export const useGetTicketDetails = () => {
  const { showToast } = useToast();
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);

  const handleGetTicketDetails = async (qrText: string) => {
    setIsLoadingDetails(true);
    const { data, error } = await supabase
      .from(DataTable.TICKETS)
      .select()
      .eq('code', qrText)
      .single();

    if (error) {
      showToast({
        type: 'error',
        message: 'Error',
        description: `Mã QR không hợp lệ!`,
      });
      throw new Error(error.message);
    }
    setIsLoadingDetails(false);
    return data as Ticket;
  };

  return {
    isLoadingDetails,
    handleGetTicketDetails,
  };
};
