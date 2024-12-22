import { QueryKeys } from '@/features/homepage/api/queryKeys';
import { cn } from '@/libs/tailwind';
import type { Driver, Vehicle } from '@/shared/types';
import { DataTable } from '@/shared/types';
import supabase from '@/shared/utils/supbabase';
import { useQuery } from '@tanstack/react-query';
import { Divider, Flex, Typography } from 'antd';

const { Text } = Typography;

type Props = {
  selectedBus?: Vehicle;
};
export const BusInformation = ({ selectedBus }: Props) => {
  const { data: driver } = useQuery<Driver>({
    queryKey: [QueryKeys.drivers, selectedBus?.driver_id],
    queryFn: async () => {
      if (!selectedBus?.driver_id) return null;
      const { data } = await supabase
        .from(DataTable.DRIVERS)
        .select()
        .eq('id', selectedBus?.driver_id)
        .single();

      return data;
    },
  });

  return (
    <>
      {selectedBus ? (
        <Flex
          vertical
          className="rounded-xl border border-solid border-gray-200 bg-gray-50 px-4 py-2"
          gap={4}
        >
          <Flex justify="space-between">
            <Text className="font-bold">Nhà xe</Text>
            <Text>{selectedBus?.companies?.name}</Text>
          </Flex>
          <Divider className="my-2" />
          <Flex justify="space-between">
            <Text className="font-bold">Tài xế</Text>
            {driver ? (
              <Text className={cn()}>
                {`${driver?.first_name} ${driver?.last_name}`}
              </Text>
            ) : (
              <Text className="text-red-600">Chưa có</Text>
            )}
          </Flex>
          <Flex justify="space-between">
            <Text className="font-bold">Kinh nghiệm</Text>
            <Text>{driver?.yoe}</Text>
          </Flex>
          <Flex justify="space-between">
            <Text className="font-bold">SDT</Text>
            <Text className="underline">{driver?.phone}</Text>
          </Flex>
          <Divider className="my-2" />
          <Flex justify="space-between">
            <Text className="font-bold">Loại xe</Text>
            <Text>{selectedBus?.type}</Text>
          </Flex>
          <Flex justify="space-between">
            <Text className="font-bold">Biển số</Text>
            <Text className="underline">{selectedBus?.plate_number}</Text>
          </Flex>
          <Flex justify="space-between">
            <Text className="font-bold">Số chỗ</Text>
            <Text>{selectedBus?.capacity}</Text>
          </Flex>
        </Flex>
      ) : null}
    </>
  );
};
