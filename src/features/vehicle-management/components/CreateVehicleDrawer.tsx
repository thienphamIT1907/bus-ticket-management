import { BaseDrawer } from '@/shared/components/core/BaseDrawer';
import { Button, Flex } from 'antd';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const CreateVehicleDrawer = ({ isOpen, onClose }: Props) => {
  return (
    <BaseDrawer
      title="Thêm mới phương tiện"
      open={isOpen}
      onClose={onClose}
      footer={
        <Flex gap={6} justify="flex-end">
          <Button size="large" type="text" onClick={onClose}>
            Huỷ
          </Button>
          <Button size="large" className="bg-[#d84f57] text-white">
            Thêm
          </Button>
        </Flex>
      }
    >
      Hello
    </BaseDrawer>
  );
};
