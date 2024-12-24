import { Flex, FloatButton, Typography } from 'antd';
import { SearchTourForm } from '@/features/homepage/components/SearchTourForm.tsx';
import { FeaturedSection } from '@/features/homepage/components/FeaturedSection.tsx';
import { FAQSection } from '@/features/homepage/components/FAQSection.tsx';
import { BusCompaniesSection } from '@/features/homepage/components/BusCompaniesSection';

const { Text, Title } = Typography;

export const Homepage = () => (
  <>
    <div className="bg-[#c35959]">
      <Flex
        vertical
        justify="center"
        align="flex-start"
        className="mx-auto max-w-4xl py-10"
        gap={12}
      >
        <Title className="mb-1 text-5xl font-bold text-white" level={1}>
          Tìm chuyến xe của bạn
        </Title>
        <Text className="text-2xl text-gray-200">
          Nhanh chóng, tiện lợi và dễ dàng
        </Text>
        <SearchTourForm />
      </Flex>
    </div>
    <Flex className="mx-auto my-10 max-w-4xl" vertical gap={40}>
      <FeaturedSection />
      <BusCompaniesSection />
      <FAQSection />
      <FloatButton.BackTop />
    </Flex>
  </>
);
