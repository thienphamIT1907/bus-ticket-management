import { useGetCompanyDetails } from '@/features/homepage/hooks/useGetCompanyDetails';
import { ImagesSlider } from '@/shared/components/ImagesSlider';
import { ScrollToTop } from '@/shared/components/ScrollToTop';
import { TableTitle } from '@/shared/components/TableTitle';
import { Flex, Image, Spin, Typography } from 'antd';
import { BsBusFront } from 'react-icons/bs';
import { useParams } from 'react-router-dom';

const { Text } = Typography;

// const ticketInfo = {
//   startPlace: 'Hanoi',
//   destinationPlace: 'Ho Chi Minh City',
//   driverName: 'Nguyen Van A',
//   busType: 'Sleeper Bus',
//   date: '2024-12-01',
//   time: '08:00 AM',
//   price: 30,
//   seatNumber: 'A12',
//   busNumber: 'VN12345',
// };

export const BusCompaniesDetailPage = () => {
  const params = useParams();

  const { companyDetails, isFetching } = useGetCompanyDetails({
    companyId: params?.id,
  });

  return (
    <>
      <ScrollToTop />
      <Spin spinning={isFetching}>
        <Flex className="mx-auto my-10 max-w-4xl" vertical gap={40}>
          <Flex align="center" gap={10}>
            <BsBusFront className="size-8 text-[#d84f57]" />
            <TableTitle
              title={`NHÀ XE ${companyDetails?.name?.toUpperCase() || ''}`}
              className="text-3xl text-[#d84f57]"
            />
          </Flex>

          <Flex vertical gap={10}>
            <TableTitle title="Thông tin" className="text-2xl" />
            <Flex justify="space-between" align="center">
              <Flex vertical gap={4} className="flex-1">
                <Flex gap={4}>
                  <Text className="font-bold">Chủ sở hữu:</Text>
                  <Text>{companyDetails?.owner}</Text>
                </Flex>
                <Flex gap={4}>
                  <Text className="font-bold">Địa chỉ:</Text>
                  <Text>{companyDetails?.address}</Text>
                </Flex>
                <Flex gap={4}>
                  <Text className="font-bold">Mã số kinh doanh:</Text>
                  <Text>{companyDetails?.business_code}</Text>
                </Flex>
                <Flex gap={4}>
                  <Text className="font-bold">Số điện thoại:</Text>
                  <Text>{companyDetails?.phone}</Text>
                </Flex>
                <Flex gap={4}>
                  <Text className="font-bold">Email:</Text>
                  <Text>{companyDetails?.email}</Text>
                </Flex>
              </Flex>
              <Image
                src={companyDetails?.avatar_base64 || ''}
                className="size-40 flex-1 object-contain"
              />
            </Flex>
          </Flex>

          {/* <Flex vertical gap={10}>
            <TableTitle title="Loại xe" className="text-2xl" />
          </Flex> */}

          {/* <Flex vertical gap={10}>
            <TableTitle title="Lộ Trình Hiện Có" className="text-2xl" />
            <TourItem ticket={ticketInfo} />
          </Flex> */}
          <Flex vertical gap={10}>
            <TableTitle title="Thư Viện Ảnh" className="text-2xl" />
            <ImagesSlider />
          </Flex>
        </Flex>
      </Spin>
    </>
  );
};
