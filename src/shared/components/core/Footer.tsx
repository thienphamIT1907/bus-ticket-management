import { Col, Flex, Row, Typography } from 'antd';
import { BsBusFront } from 'react-icons/bs';

const { Text } = Typography;

export const Footer = () => (
  <div className="bg-[#1b2330] p-8">
    <Row className="mx-auto flex max-w-4xl justify-center">
      <Col span={6}>
        <Flex vertical>
          <Text className="font-bold text-white">Thông tin thành viên</Text>
          <Flex vertical className="mt-2" gap={4}>
            <Text className="cursor-pointer text-sm font-light text-gray-200 hover:underline">
              Phạm Anh Thiện
            </Text>
            <Text className="cursor-pointer text-sm font-light text-gray-200 hover:underline">
              Võ Thanh Hải
            </Text>
            <Text className="cursor-pointer text-sm font-light text-gray-200 hover:underline">
              Đỗ Xuân Anh
            </Text>
          </Flex>
        </Flex>
      </Col>
      <Col span={6}>
        <Flex vertical>
          <Text className="text-md font-bold text-white">Về CS447Bus</Text>
          <Flex vertical className="mt-2" gap={4}>
            <Text className="cursor-pointer text-sm font-light text-gray-200 hover:underline">
              Về chúng tôi
            </Text>
            <Text className="cursor-pointer text-sm font-light text-gray-200 hover:underline">
              Liên hệ
            </Text>
          </Flex>
        </Flex>
      </Col>
      <Col span={6}>
        <Flex vertical>
          <Text className="text-md font-bold text-white">Dịch vụ</Text>
          <Flex vertical className="mt-2" gap={4}>
            <Text className="cursor-pointer text-sm font-light text-gray-200 hover:underline">
              Đánh giá chất lượng
            </Text>
            <Text className="cursor-pointer text-sm font-light text-gray-200 hover:underline">
              Tra cứu
            </Text>
            <Text className="cursor-pointer text-sm font-light text-gray-200 hover:underline">
              Góp ý
            </Text>
          </Flex>
        </Flex>
      </Col>
      <Col span={6}>
        <Flex vertical>
          <BsBusFront className="size-20 text-gray-200" />
          <Text className="mt-4 text-sm font-light text-gray-200">
            Ⓒ 2024 CS447Bus
          </Text>
          <Text className="text-sm font-light text-gray-200">
            DTU All Rights Reserved
          </Text>
        </Flex>
      </Col>
    </Row>
  </div>
);
