import { QueryKeys } from '@/features/homepage/api/queryKeys';
import type { ProvinceItem } from '@/features/homepage/types';
import { useToast } from '@/shared/hooks';
import { DataTable, type BusRoute } from '@/shared/types';
import supabase from '@/shared/utils/supbabase';
import { useQueryClient } from '@tanstack/react-query';
import { Form } from 'antd';
import { useState } from 'react';

const { useForm } = Form;

type Props = {
  onClose: () => void;
  provinces?: ProvinceItem[];
};

export const useCreateBusRoute = ({ onClose, provinces }: Props) => {
  const [form] = useForm<BusRoute>();
  const { showToast } = useToast();
  const [isCreating, setIsCreating] = useState(false);
  const queryClient = useQueryClient();

  const handleCreateBusRoute = async (newRoute: BusRoute) => {
    setIsCreating(true);

    const { error } = await supabase.from(DataTable.ROUTES).insert({
      ...newRoute,
      is_active: true,
      start_point: provinces?.filter(
        (province) => province?.slug === newRoute?.start_point,
      )?.[0]?.name,
      end_point: provinces?.filter(
        (province) => province?.slug === newRoute?.end_point,
      )?.[0]?.name,

      start_slug: newRoute?.start_point,
      end_slug: newRoute.end_point,
    });

    if (error) {
      showToast({
        type: 'error',
        message: 'Error',
        description: error?.message,
      });
    }
    queryClient.invalidateQueries({ queryKey: [QueryKeys.routes] });
    setIsCreating(false);
    onClose();
  };

  return {
    handleCreateBusRoute,
    form,
    isCreating,
  };
};
