import { useGetToursByCompany } from '@/features/bus-companies-management/hooks/useGetToursByCompany';
import { OrderTicketModal } from '@/features/homepage/components/OrderTicketModal';
import { TourItem } from '@/features/homepage/components/TourITem';
import { useGetCompanyDetails } from '@/features/homepage/hooks/useGetCompanyDetails';
import { ImagesSlider } from '@/shared/components/ImagesSlider';
import { ScrollToTop } from '@/shared/components/ScrollToTop';
import { TableTitle } from '@/shared/components/TableTitle';
import { useToggle } from '@/shared/hooks';
import type { Tour } from '@/shared/types';
import { Empty, Flex, Image, Spin, Typography } from 'antd';
import { useState } from 'react';
import { BsBusFront } from 'react-icons/bs';
import { useParams } from 'react-router-dom';

const { Text } = Typography;

export const BusCompaniesDetailPage = () => {
  const params = useParams();
  const companyId = params?.id;
  const [selectedTour, setSelectedTour] = useState<Tour | undefined>(undefined);

  const { companyDetails, isFetching } = useGetCompanyDetails({
    companyId,
  });

  const {
    open: isOpenTicketModal,
    onOpen: openTicketModal,
    onClose: closeTicketModal,
  } = useToggle();

  const handleOrderTicket = (selectedTour: Tour) => {
    setSelectedTour(selectedTour);
    openTicketModal();
  };

  const { data } = useGetToursByCompany({
    companyId,
  });

  const handleCloseTicketModal = () => {
    setSelectedTour(undefined);
    closeTicketModal();
  };

  const renderTours = () => {
    if (!data?.length) return <Empty />;

    return data?.map((item) => {
      const buses = item?.buses;
      const busHasTours = buses?.filter((bus) => bus?.tours?.length);

      if (!busHasTours?.length)
        return (
          <Empty
            description="Không có chuyến xe trong hệ thống."
            key={item?.id}
          />
        );

      return busHasTours?.map((bus) => {
        const tours = bus?.tours;

        return tours?.map((tour) => (
          <TourItem
            tour={tour}
            key={bus?.id}
            onClick={() => handleOrderTicket(tour)}
          />
        ));
      });
    });
  };

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

          <Flex vertical gap={20}>
            <TableTitle title="Chuyến Xe Hiện Có" className="text-2xl" />
            <>{renderTours()}</>
          </Flex>
          <Flex vertical gap={10}>
            <TableTitle title="Thư Viện Ảnh" className="text-2xl" />
            <ImagesSlider />
          </Flex>
        </Flex>
      </Spin>
      <OrderTicketModal
        isOpen={isOpenTicketModal}
        onClose={handleCloseTicketModal}
        selectedTour={selectedTour}
      />
    </>
  );
};
