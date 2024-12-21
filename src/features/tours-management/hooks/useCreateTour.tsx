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
};

export const useCreateTour = ({ onClose }: Props) => {
  const [form] = useForm<Tour>();
  const { showToast } = useToast();
  const [isCreating, setIsCreating] = useState(false);
  const queryClient = useQueryClient();

  const handleCreateTour = async (newTour: Tour) => {
    setIsCreating(true);

    const { error } = await supabase.from(DataTable.TOURS).insert(newTour);

    if (error) {
      showToast({
        type: 'error',
        message: 'Error',
        description: error?.message,
      });
    }
    queryClient.invalidateQueries({ queryKey: [QueryKeys.tours] });
    setIsCreating(false);
    onClose();
  };

  return {
    handleCreateTour,
    form,
    isCreating,
  };
};
