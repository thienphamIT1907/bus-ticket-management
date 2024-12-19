import { QueryKeys } from '@/features/homepage/api/queryKeys';
import { useToast } from '@/shared/hooks';
import { DataTable } from '@/shared/types';
import supabase from '@/shared/utils/supbabase';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

export const useDeleteDriver = () => {
  const { showToast } = useToast();
  const [isDeleting, setIsDeleting] = useState(false);
  const queryClient = useQueryClient();

  const handleDeleteDriver = async (driverId?: string) => {
    if (!driverId) return;

    setIsDeleting(true);

    const { error } = await supabase
      .from(DataTable.DRIVERS)
      .delete()
      .eq('id', driverId);

    if (error) {
      showToast({
        type: 'error',
        message: 'Error',
        description: error?.message || 'Có lỗi khi xoá tài xế!',
      });
      return;
    }

    queryClient.invalidateQueries({ queryKey: [QueryKeys.drivers] });

    setIsDeleting(false);
    showToast({
      message: 'Xoá tài xế thành công!',
      type: 'success',
    });
  };

  return {
    isDeleting,
    handleDeleteDriver,
  };
};
