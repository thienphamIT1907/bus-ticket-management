import type { BusCompany } from '@/features/bus-companies-management/types';
import { QueryKeys } from '@/features/homepage/api/queryKeys';
import { queryClient } from '@/main';
import { useToast } from '@/shared/hooks';
import { DataTable } from '@/shared/types';
import supabase from '@/shared/utils/supbabase';
import { useState } from 'react';

export const useToggleSponsor = () => {
  const { showToast } = useToast();
  const [isToggling, setIsToggling] = useState(false);

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
