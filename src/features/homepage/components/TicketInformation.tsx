import type { Tour } from '@/shared/types';
import { Divider, Flex, Typography } from 'antd';

const { Text } = Typography;

type Props = {
  selectedTour?: Tour;
};
export const TicketInformation = ({ selectedTour }: Props) => (
  <>
    {selectedTour ? (
      <Flex
        vertical
        className="rounded-xl border border-solid border-gray-200 bg-gray-50 px-4 py-2"
        gap={4}
      >
        <Flex justify="space-between">
          <Text className="font-bold">Tuyến đường</Text>
          <Text>
            {selectedTour?.routes?.start_point} →{' '}
            {selectedTour?.routes?.end_point}
          </Text>
        </Flex>
        <Flex justify="space-between">
          <Text className="font-bold">Khoảng cách dự tính</Text>
          <Text>{selectedTour?.routes?.est_distance}km</Text>
        </Flex>
        <Divider className="my-2" />
        <Flex justify="space-between">
          <Text className="font-bold">Nhà xe</Text>
          <Text>{selectedTour?.buses?.companies?.name}</Text>
        </Flex>
        <Flex justify="space-between">
          <Text className="font-bold">Tài xế</Text>
          <Text>
            {selectedTour?.buses?.drivers?.first_name}{' '}
            {selectedTour?.buses?.drivers?.last_name}
          </Text>
        </Flex>
        <Flex justify="space-between">
          <Text className="font-bold">Loại xe</Text>
          <Text>
            {selectedTour?.buses?.type} - {selectedTour?.buses?.capacity} Chỗ
          </Text>
        </Flex>
        <Divider className="my-2" />
        <Flex justify="space-between">
          <Text className="text-lg font-bold">Giá</Text>
          <Text className="text-lg font-bold">{selectedTour?.price} VND</Text>
        </Flex>
      </Flex>
    ) : null}
  </>
);
