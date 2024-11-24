import { Flex, FloatButton, Typography } from 'antd';
import { SearchTourForm } from '@/features/homepage/components/SearchTourForm.tsx';
import { PopularTourList } from '@/features/homepage/components/PopularTourList.tsx';
import { FeaturedSection } from '@/features/homepage/components/FeaturedSection.tsx';
import { FAQSection } from '@/features/homepage/components/FAQSection.tsx';

const { Text, Title } = Typography;

export const Homepage = () => {
  return (
    <>
      <div className="bg-[#c35959]">
        {/* Image cover */}
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
            Tìm kiếm chuyến xe, loại xe, khu vực
          </Text>
          <SearchTourForm />
        </Flex>
      </div>
      <Flex className="mx-auto my-10 max-w-4xl" vertical gap={40}>
        {/*<PopularTourList />*/}
        <FeaturedSection />

        {/*  Clients Comments */}
        {/*  Download App*/}
        {/*  Sponsort list*/}
        {/*  FAQ*/}
        <FAQSection />
        <FloatButton.BackTop />
      </Flex>
    </>
  );
};
