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
};

export const useCreateDriver = ({ onClose }: Props) => {
  const [form] = useForm<Driver>();
  const { showToast } = useToast();
  const [isCreating, setIsCreating] = useState(false);
  const queryClient = useQueryClient();

  const handleCreateDriver = async (newDriver: Driver) => {
    setIsCreating(true);

    const { error } = await supabase.from(DataTable.DRIVERS).insert(newDriver);

    if (error) {
      showToast({
        type: 'error',
        message: 'Error',
        description: error?.message,
      });
    }
    queryClient.invalidateQueries({ queryKey: [QueryKeys.drivers] });
    setIsCreating(false);
    onClose();
  };

  return {
    handleCreateDriver,
    form,
    isCreating,
  };
};
