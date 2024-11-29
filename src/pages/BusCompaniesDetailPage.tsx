import { TourItem } from '@/features/homepage/components/TourItem';
import { ImagesSlider } from '@/shared/components/ImagesSlider';
import { TableTitle } from '@/shared/components/TableTitle';
import { Flex, Typography } from 'antd';
import { BsBusFront } from 'react-icons/bs';
import { useParams } from 'react-router-dom';

const { Text } = Typography;

const mockDetails = {
  id: '1',
  name: 'Phương Trang',
  util: [
    {
      id: '1',
      name: 'Điều hoà không khí',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-air-vent"
        >
          <path d="M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
          <path d="M6 8h12" />
          <path d="M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12" />
          <path d="M6.6 15.6A2 2 0 1 0 10 17v-5" />
        </svg>
      ),
    },
    {
      id: '2',
      name: 'Wifi',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-wifi"
        >
          <path d="M12 20h.01" />
          <path d="M2 8.82a15 15 0 0 1 20 0" />
          <path d="M5 12.859a10 10 0 0 1 14 0" />
          <path d="M8.5 16.429a5 5 0 0 1 7 0" />
        </svg>
      ),
    },
    {
      id: '3',
      name: 'Nước uống',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-milk"
        >
          <path d="M8 2h8" />
          <path d="M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2" />
          <path d="M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0" />
        </svg>
      ),
    },
    {
      id: '4',
      name: 'Khăn giấy',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-sticky-note"
        >
          <path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z" />
          <path d="M15 3v4a2 2 0 0 0 2 2h4" />
        </svg>
      ),
    },
    {
      id: '5',
      name: 'Ghế giường nằm',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-rocking-chair"
        >
          <polyline points="3.5 2 6.5 12.5 18 12.5" />
          <line x1="9.5" x2="5.5" y1="12.5" y2="20" />
          <line x1="15" x2="18.5" y1="12.5" y2="20" />
          <path d="M2.75 18a13 13 0 0 0 18.5 0" />
        </svg>
      ),
    },
    {
      id: '6',
      name: 'Ổ sạc',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-plug-zap"
        >
          <path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z" />
          <path d="m2 22 3-3" />
          <path d="M7.5 13.5 10 11" />
          <path d="M10.5 16.5 13 14" />
          <path d="m18 3-4 4h6l-4 4" />
        </svg>
      ),
    },
    {
      id: '7',
      name: 'Khoang hành lý',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-briefcase"
        >
          <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          <rect width="20" height="14" x="2" y="6" rx="2" />
        </svg>
      ),
    },
    {
      id: '8',
      name: 'Thú cưng',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-paw-print"
        >
          <circle cx="11" cy="4" r="2" />
          <circle cx="18" cy="8" r="2" />
          <circle cx="20" cy="16" r="2" />
          <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
        </svg>
      ),
    },
    {
      id: '9',
      name: 'Phòng hút thuốc',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-cigarette"
        >
          <path d="M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14" />
          <path d="M18 8c0-2.5-2-2.5-2-5" />
          <path d="M21 16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
          <path d="M22 8c0-2.5-2-2.5-2-5" />
          <path d="M7 12v4" />
        </svg>
      ),
    },
    {
      id: '10',
      name: 'Đèn đọc sách',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-lamp-desk"
        >
          <path d="m14 5-3 3 2 7 8-8-7-2Z" />
          <path d="m14 5-3 3-3-3 3-3 3 3Z" />
          <path d="M9.5 6.5 4 12l3 6" />
          <path d="M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H3Z" />
        </svg>
      ),
    },
  ],
};

const ticketInfo = {
  startPlace: 'Hanoi',
  destinationPlace: 'Ho Chi Minh City',
  driverName: 'Nguyen Van A',
  busType: 'Sleeper Bus',
  date: '2024-12-01',
  time: '08:00 AM',
  price: 30,
  seatNumber: 'A12',
  busNumber: 'VN12345',
};

export const BusCompaniesDetailPage = () => {
  const params = useParams();

  console.log({ params });

  return (
    <Flex className="mx-auto my-10 max-w-4xl" vertical gap={40}>
      <Flex align="center" gap={10}>
        <BsBusFront className="size-8 text-[#d84f57]" />
        <TableTitle
          title={`NHÀ XE ${mockDetails?.name?.toUpperCase()}`}
          className="text-3xl text-[#d84f57]"
        />
      </Flex>

      <Flex vertical gap={10}>
        <TableTitle title="Tiện Nghi" className="text-2xl" />
        <div className="mt-2 grid grid-cols-3 gap-8">
          {mockDetails?.util?.map((util, index) => (
            <Flex key={index} gap={24} align="center" justify="flex-start">
              {util?.icon}
              <Text className="text-base">{util?.name}</Text>
            </Flex>
          ))}
        </div>
      </Flex>
      <Flex vertical gap={10}>
        <TableTitle title="Lộ Trình Hiện Có" className="text-2xl" />
        <TourItem ticket={ticketInfo} />
      </Flex>
      <Flex vertical gap={10}>
        <TableTitle title="Thư Viện Ảnh" className="text-2xl" />
        <ImagesSlider />
      </Flex>
    </Flex>
  );
};
