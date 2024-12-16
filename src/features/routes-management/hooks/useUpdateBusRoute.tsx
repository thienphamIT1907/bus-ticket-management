import { QueryKeys } from '@/features/homepage/api/queryKeys';
import { useToast } from '@/shared/hooks';
import type { BusRoute } from '@/shared/types';
import { DataTable } from '@/shared/types';
import { normalizeLocationToSlug } from '@/shared/utils';
import supabase from '@/shared/utils/supbabase';
import { useQueryClient } from '@tanstack/react-query';
import { Form } from 'antd';
import { useState } from 'react';

const { useForm } = Form;

type Props = {
  onClose: () => void;
  selectedRoute?: BusRoute;
};

export const useUpdateBusRoute = ({ onClose, selectedRoute }: Props) => {
  const [form] = useForm<BusRoute>();
  const { showToast } = useToast();
  const [isUpdating, setIsUpdating] = useState(false);
  const queryClient = useQueryClient();

  const handleUpdateBusRoute = async () => {
    if (!selectedRoute?.id) return;
    setIsUpdating(true);

    const formValues = form.getFieldsValue();

    const { error } = await supabase
      .from(DataTable.ROUTES)
      .update({
        ...formValues,
        start_slug: normalizeLocationToSlug(formValues?.start_point),
        end_slug: normalizeLocationToSlug(formValues.end_point),
      })
      .eq('id', selectedRoute?.id);

    if (error) {
      showToast({
        type: 'error',
        message: 'Error',
        description: error?.message,
      });
    }

    queryClient.invalidateQueries({ queryKey: [QueryKeys.routes] });

    setIsUpdating(false);
    showToast({
      type: 'success',
      message: `${selectedRoute?.start_point} - ${selectedRoute?.end_point}`,
      description: `Cập nhật thông tin tuyến đường thành công!`,
    });
    onClose();
  };

  return {
    handleUpdateBusRoute,
    form,
    isUpdating,
  };
};
