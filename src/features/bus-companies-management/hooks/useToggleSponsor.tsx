import { QueryKeys } from '@/features/homepage/api/queryKeys';
import { useToast } from '@/shared/hooks';
import type { BusCompany } from '@/shared/types';
import { DataTable } from '@/shared/types';
import supabase from '@/shared/utils/supbabase';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

export const useToggleSponsor = () => {
  const { showToast } = useToast();
  const [isToggling, setIsToggling] = useState(false);
  const queryClient = useQueryClient();

  const handleToggleSponsor = async ({
    isToggle,
    selectedCompany,
  }: {
    isToggle: boolean;
    selectedCompany: BusCompany;
  }) => {
    if (!selectedCompany?.id) return;
    setIsToggling(true);
    const { error } = await supabase
      .from(DataTable.COMPANIES)
      .update({
        is_sponsor: isToggle,
      })
      .eq('id', selectedCompany?.id);

    if (error) {
      showToast({
        type: 'error',
        message: 'Error',
        description: error?.message,
      });
    }
    queryClient.invalidateQueries({ queryKey: [QueryKeys.companies] });
    setIsToggling(false);
    showToast({
      type: 'success',
      message: `${selectedCompany?.name || ''}`,
      description: `Cập nhật thông tin nhà xe thành công!`,
    });
  };
  return {
    isToggling,
    handleToggleSponsor,
  };
};
