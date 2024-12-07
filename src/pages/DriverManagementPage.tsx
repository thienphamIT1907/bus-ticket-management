import { TableTitle } from '@/shared/components/TableTitle';
import { Button, Flex } from 'antd';
import { FiPlus } from 'react-icons/fi';

export const DriverManagementPage = () => (
  <>
    <Flex>
      <Flex justify="space-between" className="w-full">
        <TableTitle title="Quản Lý Tài Xế" className="text-2xl" />
        <Button
          className="bg-[#d84f57] px-6 py-2 text-white"
          size="large"
          icon={<FiPlus />}
        >
          Thêm phương tiện
        </Button>
      </Flex>
    </Flex>
  </>
);
