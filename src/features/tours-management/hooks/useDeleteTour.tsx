import { QueryKeys } from '@/features/homepage/api/queryKeys';
import { useToast } from '@/shared/hooks';
import { DataTable } from '@/shared/types';
import supabase from '@/shared/utils/supbabase';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

export const useDeleteTour = () => {
  const { showToast } = useToast();
  const [isDeleting, setIsDeleting] = useState(false);
  const queryClient = useQueryClient();

  const handleDeleteTour = async (tourId?: string) => {
    if (!tourId) return;

    setIsDeleting(true);

    const { error } = await supabase
      .from(DataTable.TOURS)
      .delete()
      .eq('id', tourId);

    if (error) {
      showToast({
        type: 'error',
        message: 'Error',
        description: error?.message || 'Có lỗi khi xoá lộ trình!',
      });
      return;
    }

    queryClient.invalidateQueries({ queryKey: [QueryKeys.tours] });

    setIsDeleting(false);
    showToast({
      message: 'Xoá lộ trình thành công!',
      type: 'success',
    });
  };

  return {
    isDeleting,
    handleDeleteTour,
  };
};
