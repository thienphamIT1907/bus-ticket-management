import { QueryKeys } from '@/features/homepage/api/queryKeys';
import { useToast } from '@/shared/hooks';
import { DataTable } from '@/shared/types';
import supabase from '@/shared/utils/supbabase';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

export const useDeleteBusCompany = () => {
  const { showToast } = useToast();
  const [isDeleting, setIsDeleting] = useState(false);
  const queryClient = useQueryClient();

  const handleDeleteCompany = async (companyId?: string) => {
    if (!companyId) return;

    setIsDeleting(true);
    const { error } = await supabase
      .from(DataTable.COMPANIES)
      .delete()
      .eq('id', companyId);

    if (error) {
      showToast({
        type: 'error',
        message: 'Error',
        description: error?.message || 'Không thể xoá nhà xe!',
      });
    }

    queryClient.invalidateQueries({ queryKey: [QueryKeys.companies] });

    setIsDeleting(false);
    showToast({
      message: 'Xoá nhà xe thành công',
      type: 'success',
    });
  };

  return {
    isDeleting,
    handleDeleteCompany,
  };
};
