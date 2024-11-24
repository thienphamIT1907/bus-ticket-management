import { Empty, Select, SelectProps } from 'antd';
import { ProvinceItem } from '@/shared/types';
import { debounce } from 'lodash-es';
import { useGetProvinces } from '@/features/homepage/hooks/useGetProvinces.ts';
import { useState } from 'react';
import { BiTargetLock } from 'react-icons/bi';

export const StartPointSelector = ({ ...props }: SelectProps) => {
  const [query, setQuery] = useState('');
  const { data: provinces, isLoading } = useGetProvinces({
    page: 0,
    size: 100,
    query,
  });

  const handleDropdownVisibleChange = (open: boolean) => {
    if (open) {
      setQuery('');
    }
  };

  const handleSearch = debounce((searchValue) => {
    setQuery(searchValue);
  }, 900);

  return (
    <Select
      {...props}
      prefix={<BiTargetLock className="size-5 text-gray-700" />}
      loading={isLoading}
      defaultActiveFirstOption={false}
      filterOption={false}
      className="w-full"
      options={provinces?.map((item: ProvinceItem) => ({
        label: item.name,
        value: item?.name,
      }))}
      showSearch
      allowClear
      onSearch={handleSearch}
      placeholder="Chọn điểm xuất phát..."
      size="large"
      notFoundContent={
        isLoading ? (
          'Đang tải...'
        ) : (
          <Empty description="Không tìm thấy điểm xuất phát" />
        )
      }
      onDropdownVisibleChange={handleDropdownVisibleChange}
      dropdownRender={(menu: any) => (isLoading ? 'Đang tải...' : menu)}
    />
  );
};
