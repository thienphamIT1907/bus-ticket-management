import { CreateDriverForm } from '@/features/driver-management/components/forms/CreateDriverForm';
import { UpdateDriverForm } from '@/features/driver-management/components/forms/UpdateDriverForm';
import { useDeleteDriver } from '@/features/driver-management/hooks/useDeleteDriver';
import { useDriverColumns } from '@/features/driver-management/hooks/useDriverColumns';
import { useGetDrivers } from '@/features/driver-management/hooks/useGetDrivers';
import { BaseTable } from '@/shared/components/core/BaseTable';
import { TableTitle } from '@/shared/components/TableTitle';
import { useToggle } from '@/shared/hooks';
import type { Driver } from '@/shared/types';
import { Button, Flex } from 'antd';
import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

export const DriverManagementPage = () => {
  const { data, isFetching } = useGetDrivers();
  const { handleDeleteDriver } = useDeleteDriver();

  const [selectedDriver, setSelectedDriver] = useState<Driver | undefined>(
    undefined,
  );

  const {
    onClose: closeCreateDriverForm,
    onOpen: openCreateDriverForm,
    open: isOpenCreateDriverForm,
  } = useToggle();

  const {
    onClose: closeUpdateDriverForm,
    onOpen: openUpdateDriverForm,
    open: isOpenUpdateDriverForm,
  } = useToggle();

  const onDeleteDriver = (vehicleId?: string) => {
    handleDeleteDriver(vehicleId);
  };

  const onUpdateDriver = (driver?: Driver) => {
    openUpdateDriverForm();
    setSelectedDriver(driver);
  };

  const onCloseUpdateDriver = () => {
    setSelectedDriver(undefined);
    closeUpdateDriverForm();
  };

  const { columns } = useDriverColumns({
    onDelete: onDeleteDriver,
    onUpdate: onUpdateDriver,
  });

  return (
    <>
      <Flex>
        <Flex justify="space-between" className="w-full">
          <TableTitle title="Quản Lý Tài Xế" className="text-2xl" />
          <Button
            className="border-none bg-[#d84f57] px-6 py-2 text-white shadow-md shadow-[#f3969c]"
            size="large"
            icon={<FiPlus />}
            onClick={openCreateDriverForm}
          >
            Thêm tài xế
          </Button>
        </Flex>
      </Flex>
      <div className="mt-10">
        <BaseTable dataSource={data} columns={columns} loading={isFetching} />
      </div>
      <CreateDriverForm
        isOpen={isOpenCreateDriverForm}
        onClose={closeCreateDriverForm}
      />
      <UpdateDriverForm
        isOpen={isOpenUpdateDriverForm}
        onClose={onCloseUpdateDriver}
        selectedDriver={selectedDriver}
      />
    </>
  );
};
