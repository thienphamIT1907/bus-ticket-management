import { TableTitle } from '@/shared/components/TableTitle';
import { Card, Flex, Image } from 'antd';
import { useNavigate } from 'react-router-dom';

const mockData = [
  {
    id: '1',
    image:
      'https://storage.googleapis.com/futa-express-web-cms-prod/large_LOGO_FUTA_GROUP_2023_01_51a8be4af1/large_LOGO_FUTA_GROUP_2023_01_51a8be4af1.png',
    name: 'Phương Trang',
  },
  {
    id: '2',
    image: 'https://cdn.oto360.net/images/bus/logo/SONTUNG.webp',
    name: 'Sơn Tùng',
  },
  {
    id: '3',
    image:
      'https://xekhachkinhdienhong.com/wp-content/uploads/2022/09/logo-kinhdienhong.jpg',
    name: 'Tài Phát Limousine',
  },
  {
    id: '4',
    image:
      'https://thanhbuoi.com.vn/wp-content/uploads/2020/07/Logo-Thanh-Buoi_Nonbackground-01.png',
    name: 'Thành Bưởi',
  },
  {
    id: '5',
    image:
      'https://bizweb.dktcdn.net/100/457/677/themes/867097/assets/logo.png?1657097032273',
    name: 'Bảo Cúc',
  },
  {
    id: '6',
    image:
      'https://xekhachtrangbom.vn/wp-content/uploads/2021/03/logo-xekhachtrangbom.png',
    name: 'Minh Tâm',
  },
];

export const BusCompaniesSection = () => {
  const navigate = useNavigate();

  const handleNavigateDetail = (id: string) => {
    navigate(`/bus-company/${id}`, {});
  };

  return (
    <Flex vertical gap={10}>
      <TableTitle title="Nhà Xe Đối Tác" className="text-2xl" />
      <div className="grid grid-cols-3 gap-4">
        {mockData?.map((item, index) => (
          <Card
            key={index}
            className="rounded-2xl border border-solid border-gray-200 duration-200 hover:bg-gray-200"
            onClick={() => handleNavigateDetail(item?.id)}
          >
            <Flex justify="center" align="center">
              <div className="flex size-full h-[120px] w-[300px] cursor-pointer items-center justify-center">
                <Image
                  preview={false}
                  src={item?.image}
                  className="h-[120px/] w-[120px]"
                />
              </div>
            </Flex>
          </Card>
        ))}
      </div>
    </Flex>
  );
};
