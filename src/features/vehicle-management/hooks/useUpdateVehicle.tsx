import { QueryKeys } from '@/features/homepage/api/queryKeys';
import { useToast } from '@/shared/hooks';
import type { Vehicle } from '@/shared/types';
import { DataTable } from '@/shared/types';
import supabase from '@/shared/utils/supbabase';
import { useQueryClient } from '@tanstack/react-query';
import { Form } from 'antd';
import { useState } from 'react';

const { useForm } = Form;

type Props = {
  onClose: () => void;
  selectedVehicle?: Vehicle;
};

export const useUpdateVehicle = ({ onClose, selectedVehicle }: Props) => {
  const [form] = useForm<Vehicle>();
  const { showToast } = useToast();
  const [isUpdating, setIsUpdating] = useState(false);
  const queryClient = useQueryClient();

  const handleUpdateVehicle = async () => {
    if (!selectedVehicle?.id) return;
    setIsUpdating(true);
    const { error } = await supabase
      .from(DataTable.BUSES)
      .update(form.getFieldsValue())
      .eq('id', selectedVehicle?.id);

    if (error) {
      showToast({
        type: 'error',
        message: 'Error',
        description: error?.message,
      });
    }

    queryClient.invalidateQueries({ queryKey: [QueryKeys.buses] });

    setIsUpdating(false);
    showToast({
      type: 'success',
      message: `Phương tiện ${selectedVehicle?.plate_number || ''}`,
      description: `Cập nhật thông tin nhà xe thành công!`,
    });
    onClose();
  };

  return {
    handleUpdateVehicle,
    form,
    isUpdating,
  };
};
