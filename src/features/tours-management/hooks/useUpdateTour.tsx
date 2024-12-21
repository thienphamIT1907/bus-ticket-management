import { QueryKeys } from '@/features/homepage/api/queryKeys';
import { useToast } from '@/shared/hooks';
import type { Tour } from '@/shared/types';
import { DataTable } from '@/shared/types';
import supabase from '@/shared/utils/supbabase';
import { useQueryClient } from '@tanstack/react-query';
import { Form } from 'antd';
import { useState } from 'react';

const { useForm } = Form;

type Props = {
  onClose: () => void;
  selectedTour?: Tour;
};

export const useUpdateTour = ({ onClose, selectedTour }: Props) => {
  const [form] = useForm<Tour>();
  const { showToast } = useToast();
  const [isUpdating, setIsUpdating] = useState(false);
  const queryClient = useQueryClient();

  const handleUpdateTour = async () => {
    if (!selectedTour?.id) return;
    setIsUpdating(true);

    const formValues = form.getFieldsValue();

    const { error } = await supabase
      .from(DataTable.TOURS)
      .update(formValues)
      .eq('id', selectedTour?.id);

    if (error) {
      showToast({
        type: 'error',
        message: 'Error',
        description: error?.message,
      });
    }

    queryClient.invalidateQueries({ queryKey: [QueryKeys.tours] });

    setIsUpdating(false);
    showToast({
      type: 'success',
      message: `Tour ${selectedTour?.routes?.start_point} - ${selectedTour?.routes?.end_point}`,
      description: `Cập nhật thông tin tài xế thành công!`,
    });
    onClose();
  };

  return {
    handleUpdateTour,
    form,
    isUpdating,
  };
};
