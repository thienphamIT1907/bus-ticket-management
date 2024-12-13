import type { BusRoute } from '@/features/bus-companies-management/types';
import { QueryKeys } from '@/features/homepage/api/queryKeys';
import { useToast } from '@/shared/hooks';
import { DataTable } from '@/shared/types';
import { normalizeLocationToSlug } from '@/shared/utils';
import supabase from '@/shared/utils/supbabase';
import { useQueryClient } from '@tanstack/react-query';
import { Form } from 'antd';
import { useState } from 'react';

const { useForm } = Form;

type Props = {
  onClose: () => void;
};

export const useCreateBusRoute = ({ onClose }: Props) => {
  const [form] = useForm<BusRoute>();
  const { showToast } = useToast();
  const [isCreating, setIsCreating] = useState(false);
  const queryClient = useQueryClient();

  const handleCreateBusRoute = async (newRoute: BusRoute) => {
    setIsCreating(true);

    const { error } = await supabase.from(DataTable.ROUTES).insert({
      ...newRoute,
      is_active: true,
      start_slug: normalizeLocationToSlug(newRoute?.start_point),
      end_slug: normalizeLocationToSlug(newRoute.end_point),
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
