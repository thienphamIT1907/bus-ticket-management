import { QueryKeys } from '@/features/homepage/api/queryKeys';
import { useToast } from '@/shared/hooks';
import { DataTable } from '@/shared/types';
import supabase from '@/shared/utils/supbabase';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

export const useDeleteVehicle = () => {
  const { showToast } = useToast();
  const [isDeleting, setIsDeleting] = useState(false);
  const queryClient = useQueryClient();

  const handleDeleteVehicle = async (vehicleId?: string) => {
    if (!vehicleId) return;

    setIsDeleting(true);
    const { error } = await supabase
      .from(DataTable.BUSES)
      .delete()
      .eq('id', vehicleId);

    if (error) {
      showToast({
        type: 'error',
        message: 'Error',
        description: error?.message || 'Không thể xoá phương tiện!',
      });
    }

    queryClient.invalidateQueries({ queryKey: [QueryKeys.buses] });

    setIsDeleting(false);
    showToast({
      message: 'Xoá phương tiện thành công!',
      type: 'success',
    });
  };

  return {
    isDeleting,
    handleDeleteVehicle,
  };
};
