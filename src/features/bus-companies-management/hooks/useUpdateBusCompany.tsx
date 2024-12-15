import { QueryKeys } from '@/features/homepage/api/queryKeys';
import { useToast } from '@/shared/hooks';
import type { BusCompany } from '@/shared/types';
import { DataTable } from '@/shared/types';
import supabase from '@/shared/utils/supbabase';
import { useQueryClient } from '@tanstack/react-query';
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
  const queryClient = useQueryClient();

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
