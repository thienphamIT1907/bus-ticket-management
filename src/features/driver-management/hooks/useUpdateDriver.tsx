import { QueryKeys } from '@/features/homepage/api/queryKeys';
import { useToast } from '@/shared/hooks';
import type { Driver } from '@/shared/types';
import { DataTable } from '@/shared/types';
import supabase from '@/shared/utils/supbabase';
import { useQueryClient } from '@tanstack/react-query';
import { Form } from 'antd';
import { useState } from 'react';

const { useForm } = Form;

type Props = {
  onClose: () => void;
  selectedDriver?: Driver;
};

export const useUpdateDriver = ({ onClose, selectedDriver }: Props) => {
  const [form] = useForm<Driver>();
  const { showToast } = useToast();
  const [isUpdating, setIsUpdating] = useState(false);
  const queryClient = useQueryClient();

  const handleUpdateDriver = async () => {
    if (!selectedDriver?.id) return;
    setIsUpdating(true);

    const formValues = form.getFieldsValue();

    const { error } = await supabase
      .from(DataTable.DRIVERS)
      .update(formValues)
      .eq('id', selectedDriver?.id);

    if (error) {
      showToast({
        type: 'error',
        message: 'Error',
        description: error?.message,
      });
    }

    queryClient.invalidateQueries({ queryKey: [QueryKeys.drivers] });

    setIsUpdating(false);
    showToast({
      type: 'success',
      message: `Tài xế ${selectedDriver?.first_name} ${selectedDriver?.last_name}`,
      description: `Cập nhật thông tin tài xế thành công!`,
    });
    onClose();
  };

  return {
    handleUpdateDriver,
    form,
    isUpdating,
  };
};
