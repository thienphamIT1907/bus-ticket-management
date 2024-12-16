import { QueryKeys } from '@/features/homepage/api/queryKeys';
import { useToast } from '@/shared/hooks';
import { DataTable, type Vehicle } from '@/shared/types';
import supabase from '@/shared/utils/supbabase';
import { useQueryClient } from '@tanstack/react-query';
import { Form } from 'antd';
import { omit } from 'lodash-es';
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

    const { error: busError, data: newCreatedBus } = await supabase
      .from(DataTable.BUSES)
      .insert({
        ...omit(newVehicle, 'comforts'),
      })
      .select()
      .single();

    if (busError) {
      showToast({
        type: 'error',
        message: 'Error',
        description: busError?.message || 'Có lỗi khi tạo mới phương tiện',
      });
    }

    const busWithComforts = newVehicle?.comforts?.map((comfortId) => ({
      bus_id: newCreatedBus?.id,
      comfort_id: comfortId,
    }));

    const { error: comfortsError } = await supabase
      .from(DataTable.BUSES_COMFORTS)
      .insert(busWithComforts);

    if (comfortsError) {
      showToast({
        type: 'error',
        message: 'Error',
        description:
          busError?.message || 'Có lỗi khi liên kết tiện ích với phương tiền',
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
