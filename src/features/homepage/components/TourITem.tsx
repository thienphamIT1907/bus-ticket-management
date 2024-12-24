import { Button, Flex, Typography } from 'antd';
import { GrUserWorker } from 'react-icons/gr';
import { HiOutlineCreditCard } from 'react-icons/hi2';
import { LuClock4 } from 'react-icons/lu';
import { BsBusFront } from 'react-icons/bs';
import type { Tour } from '@/shared/types';
import dayjs from 'dayjs';
import { DATE_TIME_FORMAT } from '@/shared/constants/datetime';
import { PiBuildingOffice } from 'react-icons/pi';
import { formatCurrency } from '@/shared/utils';

const { Text } = Typography;

type Props = {
  tour: Tour;
  onClick?: () => void;
};

export const TourItem = ({ tour, onClick }: Props) => (
  <Flex
    justify="flex start"
    align="flex-start"
    className="mx-auto w-full rounded-2xl border border-solid border-gray-300"
  >
    <Flex
      justify="center"
      align="center"
      className="size-48 rounded-l-2xl bg-[#d84f57] p-6"
    >
      <BsBusFront className="size-20 text-gray-100" />
    </Flex>
    <Flex vertical align="flex-start" className="w-full px-4 py-2">
      <Flex justify="space-between" align="center" className="w-full pb-2">
        <Text className="pb-0 text-xl font-bold">
          {tour?.routes?.start_point} → {tour?.routes?.end_point}
        </Text>

        <Text className="text-xl font-bold underline">
          {formatCurrency(tour?.price || 0)} VND
        </Text>
      </Flex>
      <Flex align="center" className="space-x-2 text-gray-600">
        <PiBuildingOffice />
        <Text className="text-base">
          Nhà xe: {tour?.buses?.companies?.name}
        </Text>
      </Flex>
      <Flex align="center" className="space-x-2 text-gray-600">
        <LuClock4 />
        <Text className="text-base">
          Giờ khởi hành:{' '}
          {dayjs(tour?.time_to_go).format(DATE_TIME_FORMAT.DD_MM_YYYY_HH_MM_SS)}
        </Text>
      </Flex>

      <div className="flex items-center space-x-2 text-gray-600">
        <GrUserWorker />
        <Text className="text-base">
          Tài xế: {tour?.buses?.drivers?.first_name}{' '}
          {tour?.buses?.drivers?.last_name} ({tour?.buses?.drivers?.phone})
        </Text>
      </div>

      <div className="flex items-center space-x-2 text-gray-600">
        <HiOutlineCreditCard />
        <Text className="text-base">
          Biển số xe: {tour?.buses?.plate_number}
        </Text>
      </div>
      <Button
        size="large"
        className="self-end bg-[#d84f57] text-white"
        onClick={onClick}
      >
        Đặt ngay
      </Button>
    </Flex>
  </Flex>
);
