import type { CollapseProps } from 'antd';
import { Collapse, Flex, Typography } from 'antd';
import { TableTitle } from '@/shared/components/TableTitle.tsx';

const { Text } = Typography;

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'Làm thế nào để đặt vé xe trực tuyến tại Việt Nam? ',
    children: (
      <Text>
        Đặt vé xe trực tuyến tại Việt Nam thật tiện lợi với CS447Bus. Chỉ cần
        làm theo các bước sau: đăng nhập vào trang web CS447Bus, chọn điểm xuất
        phát, chọn điểm đến và tìm chuyến đi phù hợp với bạn hành và tuyến đường
        bạn muốn, rồi tiến hành thanh toán.
      </Text>
    ),
  },
  {
    key: '2',
    label: ' Các tuyến xe phổ biến ở Việt Nam là gì? ',
    children: (
      <Text>
        Việt Nam tự hào có nhiều tuyến xe phổ biến, bao gồm Hà Nội đến Huế, Hà
        Nội đến Đà Nẵng, Đà Nẵng đến Thành phố Hồ Chí Minh, Thành phố Hồ Chí
        Minh đến Mũi Né, Huế đến Hội An, Thành phố Hồ Chí Minh đến Phan Thiết,
        Đà Nẵng đến Nha Trang, Hà Nội đến Sapa và Hà Nội đến Ninh Bình.
      </Text>
    ),
  },
  {
    key: '3',
    label: 'Bạn nên ghé thăm những địa điểm du lịch nào ở Việt Nam? ',
    children: (
      <Text>
        Việt Nam có nhiều địa điểm không thể bỏ qua như Vịnh Hạ Long, Ninh Bình,
        Đà Nẵng, Hạ Long, Huế, Hội An, Nha Trang, Thành phố Hồ Chí Minh và Sapa.
      </Text>
    ),
  },
  {
    key: '4',
    label:
      'Có dịch vụ xe khách kết nối các thành phố lớn và các điểm du lịch ở Việt Nam không?',
    children: (
      <Text>
        Chắc chắn có! Dịch vụ xe buýt thường xuyên kết nối các thành phố lớn với
        các điểm du lịch ở Việt Nam. Bạn có thể thuận tiện đặt vé xe các tuyến
        này thông qua CS447Bus.
      </Text>
    ),
  },
  {
    key: '5',
    label: 'Giá vé xe khách thông thường ở Việt Nam là bao nhiêu?',
    children: (
      <Text>
        Chắc chắn có! Dịch vụ xe buýt thường xuyên kết nối các thành phố lớn với
        các điểm du lịch ở Việt Nam. Bạn có thể thuận tiện đặt vé xe các tuyến
        này thông qua CS447Bus.
      </Text>
    ),
  },
];

export const FAQSection = () => (
  <Flex vertical gap={10}>
    <TableTitle title="Các câu hỏi thường gặp" className="text-2xl" />
    <Collapse items={items} size="large" />
  </Flex>
);
