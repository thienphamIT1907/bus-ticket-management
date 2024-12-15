import { CreateRouteForm } from '@/features/routes-management/components/forms/CreateRouteForm';
import { UpdateRouteForm } from '@/features/routes-management/components/forms/UpdateRouteForm';
import { useBusRoutesColumns } from '@/features/routes-management/hooks/useBusRoutesColumns';
import { useDeleteBusRoute } from '@/features/routes-management/hooks/useDeleteBusRoute';
import { useGetBusRoutes } from '@/features/routes-management/hooks/useGetBusRoutes';
import { useToggleActiveRoute } from '@/features/routes-management/hooks/useToggleActiveRoute';
import { BaseTable } from '@/shared/components/core/BaseTable';
import { TableTitle } from '@/shared/components/TableTitle';
import { useToggle } from '@/shared/hooks';
import type { BusRoute } from '@/shared/types';
import { Button, Flex } from 'antd';
import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

export const RoutesManagementPage = () => {
  const { data, isFetching } = useGetBusRoutes();
  const { handleToggleActiveRoute } = useToggleActiveRoute();

  const [selectedRoute, setSelectedRoute] = useState<BusRoute | undefined>(
    undefined,
  );

  const {
    onClose: closeCreateRouteForm,
    onOpen: openCreateRouteForm,
    open: isOpenCreateRouteForm,
  } = useToggle();

  const {
    onClose: closeUpdateRouteForm,
    onOpen: openUpdateRouteForm,
    open: isOpenUpdateRouteForm,
  } = useToggle();

  const { handleDeleteBusRoute } = useDeleteBusRoute();

  const onDeleteRoute = (routeId?: string) => {
    handleDeleteBusRoute(routeId);
  };

  const onUpdateRoute = (route?: BusRoute) => {
    openUpdateRouteForm();
    setSelectedRoute(route);
  };

  const onToggleActiveRoute = (isToggle: boolean, selectedRoute: BusRoute) => {
    setSelectedRoute(selectedRoute);
    handleToggleActiveRoute({
      isToggle,
      selectedRoute,
    });
  };

  const { columns } = useBusRoutesColumns({
    onDelete: onDeleteRoute,
    onUpdate: onUpdateRoute,
    onToggle: onToggleActiveRoute,
  });

  return (
    <>
      <Flex vertical>
        <Flex justify="space-between" className="w-full">
          <TableTitle title="Quản Lý Tuyến Đường" className="text-2xl" />
          <Button
            className="border-none bg-[#d84f57] px-6 py-2 text-white shadow-md shadow-[#f3969c]"
            size="large"
            icon={<FiPlus />}
            onClick={openCreateRouteForm}
          >
            Thêm tuyến đường
          </Button>
        </Flex>
        <div className="mt-10">
          <BaseTable dataSource={data} columns={columns} loading={isFetching} />
        </div>
        <CreateRouteForm
          isOpen={isOpenCreateRouteForm}
          onClose={closeCreateRouteForm}
        />
        <UpdateRouteForm
          isOpen={isOpenUpdateRouteForm}
          onClose={closeUpdateRouteForm}
          selectedRoute={selectedRoute}
        />
      </Flex>
    </>
  );
};
