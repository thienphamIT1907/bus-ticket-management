import { BusComfortCard } from '@/features/bus-comforts-management/components/BusComfortCard';
import { useGetBusComforts } from '@/features/bus-comforts-management/hooks/useGetBusComforts';
import { useToggleBusComfort } from '@/features/bus-comforts-management/hooks/useToggleBusComfort';
import { TableTitle } from '@/shared/components/TableTitle';
import { Button, Empty, Flex, Spin } from 'antd';
import { FiPlus } from 'react-icons/fi';

export const BusComfortsManagementPage = () => {
  const { busComforts, isFetching } = useGetBusComforts();
  const { handleToggleBusComfort } = useToggleBusComfort();

  if (!busComforts?.length) {
    return <Empty description="Không có dữ liệu" />;
  }
  return (
    <Spin spinning={isFetching}>
      <Flex vertical>
        <Flex justify="space-between" className="w-full">
          <TableTitle title="Quản Lý Tiện ích" className="text-2xl" />
          <Button
            disabled
            className="border-none bg-[#d84f57] px-6 py-2 text-white opacity-50 shadow-md shadow-[#f3969c]"
            size="large"
            icon={<FiPlus />}
          >
            Thêm tiện ích
          </Button>
        </Flex>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {busComforts?.map((comfort) => (
            <BusComfortCard
              comfort={comfort}
              key={comfort?.id}
              handleToggleBusComfort={handleToggleBusComfort}
            />
          ))}
        </div>
      </Flex>
    </Spin>
  );
};
