import { QueryKeys } from '@/features/homepage/api/queryKeys';
import { useToast } from '@/shared/hooks';
import type { Vehicle } from '@/shared/types';
import { DataTable } from '@/shared/types';
import supabase from '@/shared/utils/supbabase';
import { useQueryClient } from '@tanstack/react-query';
import { Form } from 'antd';
import { omit } from 'lodash-es';
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

    const { error: busError } = await supabase
      .from(DataTable.BUSES)
      .update(omit(form.getFieldsValue(), 'comforts'))
      .eq('id', selectedVehicle?.id);

    if (busError) {
      showToast({
        type: 'error',
        message: 'Error',
        description: busError?.message || 'Có lỗi khi cập nhật phương tiện',
      });
      return;
    }

    const { error: deleteError } = await supabase
      .from(DataTable.BUSES_COMFORTS)
      .delete()
      .eq('bus_id', selectedVehicle?.id);

    if (deleteError) {
      showToast({
        type: 'error',
        message: 'Error',
        description:
          deleteError?.message || 'Có lỗi khi khởi tạo lại dữ liệu phương tiện',
      });
      return;
    }

    const busWithComforts = form
      ?.getFieldsValue()
      ?.comforts?.map((comfortId: string) => ({
        bus_id: selectedVehicle?.id,
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
          comfortsError?.message ||
          'Có lỗi khi cập nhật tiện ích liên kết với phương tiện',
      });
      return;
    }

    queryClient.invalidateQueries({ queryKey: [QueryKeys.buses] });

    showToast({
      type: 'success',
      message: `Phương tiện ${selectedVehicle?.plate_number || ''}`,
      description: `Cập nhật thông tin phương tiện thành công!`,
    });
    setIsUpdating(false);
    onClose();
  };

  return {
    handleUpdateVehicle,
    form,
    isUpdating,
  };
};
