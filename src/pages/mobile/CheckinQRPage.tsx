import QRCodeScanner from '@/features/qr-scanner/components/QRCodeScanner';
import { Logo } from '@/shared/components/core/Logo';
import { Flex, Typography } from 'antd';

const { Text } = Typography;

export const CheckinQRPage = () => (
  <Flex justify="center" align="flex-start" vertical className="mx-auto w-full">
    <Flex
      className="w-full bg-[#c35959] p-4 text-2xl font-medium"
      align="center"
      gap={10}
      justify="center"
    >
      <Logo className="size-7 text-white" />
      <Text className="font-bold text-white">CS447Bus - Checkin</Text>
    </Flex>
    <QRCodeScanner />
  </Flex>
);
