import { TableTitle } from '@/shared/components/TableTitle';
import { Button, Flex } from 'antd';
import { FiPlus } from 'react-icons/fi';

export const TourManagementPage = () => (
  <>
    <Flex>
      <Flex justify="space-between" className="w-full">
        <TableTitle title="Quản Lý Tuyến Đường" className="text-2xl" />
        <Button
          className="bg-[#d84f57] px-6 py-2 text-white"
          size="large"
          icon={<FiPlus />}
        >
          Thêm Tuyến Đường
        </Button>
      </Flex>
    </Flex>
  </>
);
