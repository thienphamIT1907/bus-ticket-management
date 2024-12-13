import type { BusComfort } from '@/features/bus-companies-management/types';
import { Flex, Image, Switch, Typography } from 'antd';

const { Text } = Typography;

type Props = {
  comfort: BusComfort;
  handleToggleBusComfort: ({
    isToggle,
    selectedComfort,
  }: {
    isToggle: boolean;
    selectedComfort: BusComfort;
  }) => Promise<void>;
};
export const BusComfortCard = ({ comfort, handleToggleBusComfort }: Props) => (
  <Flex
    gap={24}
    align="center"
    justify="space-between"
    className="rounded-xl border border-solid border-gray-300 p-4"
  >
    <Flex align="center" justify="flex-start" gap={12}>
      <Image
        src={comfort?.icon_base64 || ''}
        preview={false}
        className="size-6"
      />
      <Text className="text-base">{comfort?.name}</Text>
    </Flex>
    <Switch
      defaultChecked={comfort?.is_active || false}
      onChange={(isActive) =>
        handleToggleBusComfort({
          isToggle: isActive,
          selectedComfort: comfort,
        })
      }
    />
  </Flex>
);
