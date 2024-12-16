import { QueryKeys } from '@/features/homepage/api/queryKeys';
import { DataTable } from '@/shared/types';
import type { Database } from '@/shared/types/database.types';
import supabase from '@/shared/utils/supbabase';
import { useQuery } from '@tanstack/react-query';
import type { SelectProps } from 'antd';
import { Select } from 'antd';
import { FaCheck } from 'react-icons/fa6';

type Props = {} & SelectProps;

export const ComfortsSelector = ({ ...props }: Props) => {
  const { data: busComforts, isFetching } = useQuery({
    initialData: [],
    queryKey: [QueryKeys.comforts],
    queryFn: async () => {
      const { data } = await supabase
        .from<
          DataTable.COMFORTS,
          Database['public']['Tables']['comforts']
        >(DataTable.COMFORTS)
        .select()
        .eq('is_active', true)
        .order('name', { ascending: true });

      return data;
    },
  });

  const dataOptions = busComforts?.map((item) => ({
    label: item?.name,
    value: item?.id,
  }));

  return (
    <Select
      {...props}
      menuItemSelectedIcon={<FaCheck className="size-5 text-green-600" />}
      options={dataOptions}
      showSearch={false}
      size="large"
      loading={isFetching}
      placeholder="Chọn tiện ích"
      allowClear
      mode="multiple"
    />
  );
};
