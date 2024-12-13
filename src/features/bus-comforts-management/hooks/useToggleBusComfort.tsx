import type { BusComfort } from '@/features/bus-companies-management/types';
import { QueryKeys } from '@/features/homepage/api/queryKeys';
import { useToast } from '@/shared/hooks';
import { DataTable } from '@/shared/types';
import supabase from '@/shared/utils/supbabase';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

export const useToggleBusComfort = () => {
  const { showToast } = useToast();
  const [isToggling, setIsToggling] = useState(false);
  const queryClient = useQueryClient();

  const handleToggleBusComfort = async ({
    isToggle,
    selectedComfort,
  }: {
    isToggle: boolean;
    selectedComfort: BusComfort;
  }) => {
    if (!selectedComfort?.id) return;
    setIsToggling(true);
    const { error } = await supabase
      .from(DataTable.COMFORTS)
      .update({
        is_active: isToggle,
      })
      .eq('id', selectedComfort?.id);

    if (error) {
      showToast({
        type: 'error',
        message: 'Error',
        description: error?.message,
      });
    }
    queryClient.invalidateQueries({ queryKey: [QueryKeys.comforts] });
    setIsToggling(false);
    showToast({
      type: 'success',
      message: `Tiện ích "${selectedComfort?.name}"`,
      description: `Cập nhật tiện ích thành công!`,
    });
  };
  return {
    isToggling,
    handleToggleBusComfort,
  };
};
