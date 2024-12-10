import { CreateBusCompanyForm } from '@/features/bus-companies-management/components/forms/CreateBusCompanyForm';
import { UpdateBusCompanyForm } from '@/features/bus-companies-management/components/forms/UpdateBusCompanyForm';
import { useBusCompanyColumns } from '@/features/bus-companies-management/hooks/useBusCompanyColumns';
import { useDeleteBusCompany } from '@/features/bus-companies-management/hooks/useDeleteBusCompany';
import { useGetBusCompany } from '@/features/bus-companies-management/hooks/useGetBusCompany';
import type { BusCompany } from '@/features/bus-companies-management/types';
import { BaseTable } from '@/shared/components/core/BaseTable';
import { TableTitle } from '@/shared/components/TableTitle';
import { useToggle } from '@/shared/hooks';
import { Button, Flex } from 'antd';
import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

export const BusCompaniesManagementPage = () => {
  const { data, isFetching } = useGetBusCompany();
  const [selectedCompany, setSelectedCompany] = useState<
    BusCompany | undefined
  >(undefined);
  const {
    onClose: closeCreateBusCompanyForm,
    onOpen: openCreateBusCompanyForm,
    open: isOpenCreateBusCompanyForm,
  } = useToggle();

  const {
    onClose: closeUpdateBusCompanyForm,
    onOpen: openUpdateBusCompanyForm,
    open: isOpenUpdateBusCompanyForm,
  } = useToggle();

  const { handleDeleteCompany } = useDeleteBusCompany();

  const onDeleteCompany = (companyId?: string) => {
    handleDeleteCompany(companyId);
  };

  const onUpdateCompany = (company?: BusCompany) => {
    openUpdateBusCompanyForm();
    setSelectedCompany(company);
  };

  const onCloseUpdateCompany = () => {
    setSelectedCompany(undefined);
    closeUpdateBusCompanyForm();
  };

  const { columns } = useBusCompanyColumns({
    onDelete: onDeleteCompany,
    onUpdate: onUpdateCompany,
  });

  return (
    <>
      <Flex vertical>
        <Flex justify="space-between" className="w-full">
          <TableTitle title="Quản Lý Nhà Xe" className="text-2xl" />
          <Button
            className="border-none bg-[#d84f57] px-6 py-2 text-white shadow-md shadow-[#f3969c]"
            size="large"
            icon={<FiPlus />}
            onClick={openCreateBusCompanyForm}
          >
            Thêm nhà xe
          </Button>
        </Flex>
        <div className="mt-10">
          <BaseTable dataSource={data} columns={columns} loading={isFetching} />
        </div>
      </Flex>

      <CreateBusCompanyForm
        isOpen={isOpenCreateBusCompanyForm}
        onClose={closeCreateBusCompanyForm}
      />
      <UpdateBusCompanyForm
        isOpen={isOpenUpdateBusCompanyForm}
        onClose={onCloseUpdateCompany}
        selectedCompany={selectedCompany}
      />
    </>
  );
};
