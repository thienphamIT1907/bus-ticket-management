import { TourItem } from '@/features/homepage/components/TourITem';
import type { Tour } from '@/shared/types';
import { Flex, Modal, Typography } from 'antd';

const { Text } = Typography;

type Props = {
  isOpen: boolean;
  onClose: () => void;
  tourList: Tour[] | null;
  handleOrderTicket: (tour: Tour) => void;
};

export const TourListModal = ({
  isOpen,
  onClose,
  tourList,
  handleOrderTicket,
}: Props) => (
  <Modal
    title={
      <Text className="text-2xl font-bold">
        Danh sách xe tuyến{' '}
        {`${tourList?.[0]?.routes?.start_point} -
       ${tourList?.[0]?.routes?.end_point}`}
      </Text>
    }
    className="w-3/4"
    centered
    open={isOpen}
    onCancel={onClose}
    maskClosable={false}
    footer={null}
  >
    <Flex
      justify="flex-start"
      align="center"
      vertical
      gap={24}
      className="mb-2 mt-8"
    >
      {tourList?.map((tour) => (
        <div key={tour.id} className="w-full">
          <TourItem tour={tour} onClick={() => handleOrderTicket(tour)} />
        </div>
      ))}
    </Flex>
  </Modal>
);
