import { CreateVehicleForm } from '@/features/vehicle-management/components/forms/CreateVehicleForm';
import { UpdateVehicleForm } from '@/features/vehicle-management/components/forms/UpdateVehicleForm';
import { useDeleteVehicle } from '@/features/vehicle-management/hooks/useDeleteVehicle';
import { useGetVehicle } from '@/features/vehicle-management/hooks/useGetVehicle';
import { useVehicleColumn } from '@/features/vehicle-management/hooks/useVehicleColumn';

import { BaseTable } from '@/shared/components/core/BaseTable';
import { TableTitle } from '@/shared/components/TableTitle';
import { useToggle } from '@/shared/hooks';
import type { Vehicle } from '@/shared/types';
import { Button, Flex } from 'antd';
import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

export const VehicleManagementPage = () => {
  const { data, isFetching } = useGetVehicle();
  const { handleDeleteVehicle } = useDeleteVehicle();

  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | undefined>(
    undefined,
  );
  const {
    onClose: closeCreateVehicleForm,
    onOpen: openCreateVehicleForm,
    open: isOpenCreateVehicleForm,
  } = useToggle();

  const {
    onClose: closeUpdateVehicleForm,
    onOpen: openUpdateVehicleForm,
    open: isOpenUpdateVehicleForm,
  } = useToggle();

  const onDeleteVehicle = (vehicleId?: string) => {
    handleDeleteVehicle(vehicleId);
  };

  const onUpdateVehicle = (vehicle?: Vehicle) => {
    openUpdateVehicleForm();
    setSelectedVehicle(vehicle);
  };

  const onCloseUpdateCompany = () => {
    setSelectedVehicle(undefined);
    closeUpdateVehicleForm();
  };

  const { columns } = useVehicleColumn({
    onDelete: onDeleteVehicle,
    onUpdate: onUpdateVehicle,
  });

  return (
    <>
      <Flex vertical>
        <Flex justify="space-between" className="w-full">
          <TableTitle title="Quản Lý Phương Tiện" className="text-2xl" />
          <Button
            className="border-none bg-[#d84f57] px-6 py-2 text-white shadow-md shadow-[#f3969c]"
            size="large"
            icon={<FiPlus />}
            onClick={openCreateVehicleForm}
          >
            Thêm Phương Tiện
          </Button>
        </Flex>
        <div className="mt-10">
          <BaseTable dataSource={data} columns={columns} loading={isFetching} />
        </div>
        <CreateVehicleForm
          isOpen={isOpenCreateVehicleForm}
          onClose={closeCreateVehicleForm}
        />
        <UpdateVehicleForm
          isOpen={isOpenUpdateVehicleForm}
          onClose={onCloseUpdateCompany}
          selectedVehicle={selectedVehicle}
        />
      </Flex>
    </>
  );
};
