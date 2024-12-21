import { useGetVehicle } from '@/features/vehicle-management/hooks/useGetVehicle';
import type { Vehicle } from '@/shared/types';
import type { SelectProps } from 'antd';
import { Select } from 'antd';
import { FaCheck } from 'react-icons/fa6';

type Props = {
  setSelectedBus: (bus: Vehicle | undefined) => void;
} & SelectProps;

export const BusSelector = ({ setSelectedBus, ...props }: Props) => {
  const { data, isFetching } = useGetVehicle();

  const dataOptions = data?.map((item) => ({
    label: `${item?.companies?.name} - ${item?.type} (${item?.capacity} chỗ)`,
    value: item?.id,
  }));

  const handleChange = (value: string) => {
    const selectedBus = data?.find((bus) => bus.id === value);

    if (!selectedBus) return;
    setSelectedBus(selectedBus);
  };

  return (
    <Select
      {...props}
      menuItemSelectedIcon={<FaCheck className="size-5 text-green-600" />}
      options={dataOptions}
      showSearch={false}
      size="large"
      loading={isFetching}
      allowClear
      onSelect={handleChange}
      onClear={() => setSelectedBus(undefined)}
    />
  );
};
