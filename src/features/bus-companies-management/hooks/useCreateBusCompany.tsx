import type { BusCompany } from '@/features/bus-companies-management/types';
import { QueryKeys } from '@/features/homepage/api/queryKeys';
import { useToast } from '@/shared/hooks';
import { DataTable } from '@/shared/types';
import supabase from '@/shared/utils/supbabase';
import { useQueryClient } from '@tanstack/react-query';
import { Form } from 'antd';
import { useState } from 'react';

const { useForm } = Form;

type Props = {
  onClose: () => void;
};

export const useCreateBusCompany = ({ onClose }: Props) => {
  const [form] = useForm<BusCompany>();
  const { showToast } = useToast();
  const [isCreating, setIsCreating] = useState(false);
  const queryClient = useQueryClient();

  const handleCreateBusCompany = async (newCompany: BusCompany) => {
    setIsCreating(true);

    const { error } = await supabase
      .from(DataTable.COMPANIES)
      .insert(newCompany);

    if (error) {
      showToast({
        type: 'error',
        message: 'Error',
        description: error?.message,
      });
    }
    queryClient.invalidateQueries({ queryKey: [QueryKeys.companies] });
    setIsCreating(false);
    onClose();
  };

  return {
    handleCreateBusCompany,
    form,
    isCreating,
  };
};
