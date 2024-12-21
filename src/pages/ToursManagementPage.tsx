import { CreateTourForm } from '@/features/tours-management/components/forms/CreateTourForm';
import { UpdateTourForm } from '@/features/tours-management/components/forms/UpdateTourForm';
import { useDeleteTour } from '@/features/tours-management/hooks/useDeleteTour';
import { useGetTours } from '@/features/tours-management/hooks/useGetTours';

import { useToursColumn } from '@/features/tours-management/hooks/useToursColumn';
import { BaseTable } from '@/shared/components/core/BaseTable';
import { TableTitle } from '@/shared/components/TableTitle';
import { useToggle } from '@/shared/hooks';
import type { Tour } from '@/shared/types';
import { Button, Flex } from 'antd';
import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

export const ToursManagementPage = () => {
  const { data, isFetching } = useGetTours();
  const { handleDeleteTour } = useDeleteTour();

  const [selectedTour, setSelectedTour] = useState<Tour | undefined>(undefined);

  const {
    onClose: closeCreateTourForm,
    onOpen: openCreateTourForm,
    open: isOpenCreateTourForm,
  } = useToggle();

  const {
    onClose: closeUpdateTourForm,
    onOpen: openUpdateTourForm,
    open: isOpenUpdateTourForm,
  } = useToggle();

  const onDeleteTour = (tourId?: string) => {
    handleDeleteTour(tourId);
  };

  const onUpdateTour = (tour?: Tour) => {
    openUpdateTourForm();
    setSelectedTour(tour);
  };

  const onCloseUpdateRoute = () => {
    setSelectedTour(undefined);
    closeUpdateTourForm();
  };

  const { columns } = useToursColumn({
    onDelete: onDeleteTour,
    onUpdate: onUpdateTour,
  });

  return (
    <>
      <Flex vertical>
        <Flex justify="space-between" className="w-full">
          <TableTitle title="Quản Lý Lộ Trình" className="text-2xl" />
          <Button
            className="border-none bg-[#d84f57] px-6 py-2 text-white shadow-md shadow-[#f3969c]"
            size="large"
            icon={<FiPlus />}
            onClick={openCreateTourForm}
          >
            Thêm Lộ Trình
          </Button>
        </Flex>
        <div className="mt-10">
          <BaseTable dataSource={data} columns={columns} loading={isFetching} />
        </div>
        <CreateTourForm
          isOpen={isOpenCreateTourForm}
          onClose={closeCreateTourForm}
        />
        <UpdateTourForm
          isOpen={isOpenUpdateTourForm}
          onClose={onCloseUpdateRoute}
          selectedTour={selectedTour}
        />
      </Flex>
    </>
  );
};
