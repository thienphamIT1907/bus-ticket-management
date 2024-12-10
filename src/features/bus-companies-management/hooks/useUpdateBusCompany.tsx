import type { BusCompany } from '@/features/bus-companies-management/types';
import { QueryKeys } from '@/features/homepage/api/queryKeys';
import { queryClient } from '@/main';
import { useToast } from '@/shared/hooks';
import { DataTable } from '@/shared/types';
import supabase from '@/shared/utils/supbabase';
import { Form } from 'antd';
import { useState } from 'react';

const { useForm } = Form;

type Props = {
  onClose: () => void;
  selectedCompany?: BusCompany;
};

export const useUpdateBusCompany = ({ onClose, selectedCompany }: Props) => {
  const [form] = useForm<BusCompany>();
  const { showToast } = useToast();
  const [isUpdating, setIsUpdating] = useState(false);

  const handleUpdateBusCompany = async () => {
    if (!selectedCompany?.id) return;
    setIsUpdating(true);
    const { error } = await supabase
      .from(DataTable.COMPANIES)
      .update(form.getFieldsValue())
      .eq('id', selectedCompany?.id);

    if (error) {
      showToast({
        type: 'error',
        message: 'Error',
        description: error?.message,
      });
    }
    queryClient.invalidateQueries({ queryKey: [QueryKeys.companies] });
    setIsUpdating(false);
    showToast({
      type: 'success',
      message: `${selectedCompany?.name || ''}`,
      description: `Cập nhật thông tin nhà xe thành công!`,
    });
    onClose();
  };

  return {
    handleUpdateBusCompany,
    form,
    isUpdating,
  };
};
