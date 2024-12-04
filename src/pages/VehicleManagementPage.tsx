import { CreateVehicleDrawer } from '@/features/vehicle-management/components/CreateVehicleDrawer';
import { TableTitle } from '@/shared/components/TableTitle';
import { useToggle } from '@/shared/hooks';
import supabase from '@/shared/utils/supbabase';
import { Button, Flex } from 'antd';
import { useEffect } from 'react';
import { FiPlus } from 'react-icons/fi';

export const VehicleManagementPage = () => {
  const {
    open: isOpen,
    onClose: closeCreateVehicleDrawer,
    onOpen: openCreateVehicleDrawer,
  } = useToggle();

  useEffect(() => {
    async function getTodos() {
      const { data } = await supabase.from('Test').select();
    }

    getTodos();
  }, []);

  return (
    <>
      <Flex>
        <Flex justify="space-between" className="w-full">
          <TableTitle title="Quản Lý Phương Tiện" className="text-2xl" />
          <Button
            className="bg-[#d84f57] px-6 py-2 text-white"
            size="large"
            onClick={openCreateVehicleDrawer}
            icon={<FiPlus />}
          >
            Thêm phương tiện
          </Button>
        </Flex>
      </Flex>
      <CreateVehicleDrawer isOpen={isOpen} onClose={closeCreateVehicleDrawer} />
    </>
  );
};
