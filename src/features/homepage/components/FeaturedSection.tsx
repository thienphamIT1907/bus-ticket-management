import { FeaturedItem } from '@/features/homepage/types';
import { Flex, Image, Typography } from 'antd';

const { Text } = Typography;

const featureds: FeaturedItem[] = [
  {
    id: 1,
    title: 'Hơn 10.000',
    subTitle: 'Khách hàng trên cả nước',
    image: '/assets/images/clients.svg',
  },
  {
    id: 2,
    title: 'Hơn 300',
    subTitle: 'Chuyến xe mỗi ngày',
    image: '/assets//images/bus.svg',
  },
  {
    id: 3,
    title: 'Hơn 50',
    subTitle: 'Đối tác nhà xe uy tín',
    image: '/assets/images/booked.svg',
  },
];

export const FeaturedSection = () => {
  return (
    <div className="w-full">
      <Flex justify="center" align="center" gap={12}>
        {featureds?.map((featuredItem: FeaturedItem) => (
          <Flex
            vertical
            align="center"
            justify="space-between"
            className="h-full min-h-64 flex-1 rounded-2xl border border-solid border-gray-200 bg-white p-4"
          >
            <Image
              preview={false}
              src={featuredItem?.image}
              className="size-52"
            />
            <Flex
              vertical
              gap={2}
              justify="center"
              align="center"
              className="-mt-4"
            >
              <Text className="text-center text-2xl font-bold">
                {featuredItem?.title}
              </Text>
              <Text>{featuredItem?.subTitle}</Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </div>
  );
};
