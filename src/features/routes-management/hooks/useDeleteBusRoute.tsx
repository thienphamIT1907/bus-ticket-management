import { QueryKeys } from '@/features/homepage/api/queryKeys';
import { useToast } from '@/shared/hooks';
import { DataTable } from '@/shared/types';
import supabase from '@/shared/utils/supbabase';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

export const useDeleteBusRoute = () => {
  const { showToast } = useToast();
  const [isDeleting, setIsDeleting] = useState(false);
  const queryClient = useQueryClient();

  const handleDeleteBusRoute = async (routeId?: string) => {
    if (!routeId) return;

    setIsDeleting(true);
    const { error } = await supabase
      .from(DataTable.ROUTES)
      .delete()
      .eq('id', routeId);

    if (error) {
      showToast({
        type: 'error',
        message: 'Error',
        description: error?.message || 'Không thể xoá tuyến đường!',
      });
    }

    queryClient.invalidateQueries({ queryKey: [QueryKeys.routes] });

    setIsDeleting(false);
    showToast({
      message: 'Xoá tuyến đường thành công',
      type: 'success',
    });
  };

  return {
    isDeleting,
    handleDeleteBusRoute,
  };
};
