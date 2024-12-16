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

    const { error: comfortError } = await supabase
      .from(DataTable.BUSES_COMFORTS)
      .delete()
      .eq('bus_id', vehicleId);

    if (comfortError) {
      showToast({
        type: 'error',
        message: 'Error',
        description:
          comfortError?.message ||
          'Có lỗi khi xoá tiện ích liên kết với phương tiện!',
      });
      return;
    }

    const { error: busError } = await supabase
      .from(DataTable.BUSES)
      .delete()
      .eq('id', vehicleId);

    if (busError) {
      showToast({
        type: 'error',
        message: 'Error',
        description: busError?.message || 'Có lỗi khi xoá phương tiện!',
      });
      return;
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
