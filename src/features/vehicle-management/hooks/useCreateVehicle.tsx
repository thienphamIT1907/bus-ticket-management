import { QueryKeys } from '@/features/homepage/api/queryKeys';
import { useToast } from '@/shared/hooks';
import { DataTable, type Vehicle } from '@/shared/types';
import supabase from '@/shared/utils/supbabase';
import { useQueryClient } from '@tanstack/react-query';
import { Form } from 'antd';
import { useState } from 'react';

const { useForm } = Form;

type Props = {
  onClose: () => void;
};

export const useCreateVehicle = ({ onClose }: Props) => {
  const [form] = useForm<Vehicle>();
  const { showToast } = useToast();
  const [isCreating, setIsCreating] = useState(false);
  const queryClient = useQueryClient();

  const handleCreateVehicle = async (newVehicle: Vehicle) => {
    setIsCreating(true);

    const { error } = await supabase.from(DataTable.BUSES).insert({
      ...newVehicle,
    });

    if (error) {
      showToast({
        type: 'error',
        message: 'Error',
        description: error?.message,
      });
    }
    queryClient.invalidateQueries({ queryKey: [QueryKeys.buses] });
    setIsCreating(false);
    onClose();
  };

  return {
    handleCreateVehicle,
    form,
    isCreating,
  };
};
