import { Button, Flex, Typography } from 'antd';
import { GrUserWorker } from 'react-icons/gr';
import { HiOutlineCreditCard } from 'react-icons/hi2';
import { LuClock4 } from 'react-icons/lu';
import { BsBusFront } from 'react-icons/bs';

const { Text } = Typography;

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ticket: any;
};

export const TourItem = ({ ticket }: Props) => {
  const {
    startPlace,
    destinationPlace,
    driverName,
    date,
    time,
    price,
    busNumber,
  } = ticket;

  return (
    <Flex
      justify="flex start"
      align="flex-start"
      className="mx-auto w-full rounded-2xl border border-solid border-gray-200"
    >
      <Flex
        justify="center"
        align="center"
        className="size-44 rounded-l-2xl bg-[#d84f57] p-6"
      >
        <BsBusFront className="size-20 text-gray-100" />
      </Flex>
      <Flex vertical align="flex-start" className="w-full px-4 py-2">
        <Flex justify="space-between" align="center" className="w-full pb-2">
          <Text className="pb-0 text-xl font-bold">
            {startPlace} → {destinationPlace}
          </Text>

          <Text className="text-xl font-bold underline">{price}0.000 VND</Text>
        </Flex>
        <Flex align="center" className="space-x-2 text-gray-600">
          <LuClock4 />
          <Text className="text-base">
            {date} at {time}
          </Text>
        </Flex>

        <div className="flex items-center space-x-2 text-gray-600">
          <GrUserWorker />
          <Text className="text-base">Tài xế: {driverName}</Text>
        </div>

        <div className="flex items-center space-x-2 text-gray-600">
          <HiOutlineCreditCard />
          <Text className="text-base">Biển số xe: {busNumber}</Text>
        </div>
        <Button size="large" className="self-end bg-[#d84f57] text-white">
          Đặt ngay
        </Button>
      </Flex>
    </Flex>
  );
};
