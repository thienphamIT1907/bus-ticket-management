import type { BusRoute } from '@/features/bus-companies-management/types';
import { QueryKeys } from '@/features/homepage/api/queryKeys';
import { useToast } from '@/shared/hooks';
import { DataTable } from '@/shared/types';
import supabase from '@/shared/utils/supbabase';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

export const useToggleActiveRoute = () => {
  const { showToast } = useToast();
  const [isToggling, setIsToggling] = useState(false);
  const queryClient = useQueryClient();

  const handleToggleActiveRoute = async ({
    isToggle,
    selectedRoute,
  }: {
    isToggle: boolean;
    selectedRoute: BusRoute;
  }) => {
    if (!selectedRoute?.id) return;
    setIsToggling(true);
    const { error } = await supabase
      .from(DataTable.ROUTES)
      .update({
        is_active: isToggle,
      })
      .eq('id', selectedRoute?.id);

    if (error) {
      showToast({
        type: 'error',
        message: 'Error',
        description: error?.message,
      });
    }
    queryClient.invalidateQueries({ queryKey: [QueryKeys.routes] });
    setIsToggling(false);
    showToast({
      type: 'success',
      message: `Tuyến ${selectedRoute?.start_point} - ${selectedRoute?.end_point}`,
      description: `Cập nhật thông tin tuyến đường thành công!`,
    });
  };
  return {
    isToggling,
    handleToggleActiveRoute,
  };
};
