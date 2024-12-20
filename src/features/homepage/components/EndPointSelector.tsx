import type { SelectProps } from 'antd';
import { Empty, Select } from 'antd';
import { debounce } from 'lodash-es';
import { IoLocationOutline } from 'react-icons/io5';
import type { ProvinceItem } from '@/features/homepage/types';
import { renderDropdown } from '@/features/homepage/helpers';

type EndPointSelectorProps = {
  provinces?: ProvinceItem[];
  isLoading: boolean;
  setQuery: (query: string) => void;
} & SelectProps;

export const EndPointSelector = ({
  provinces,
  setQuery,
  isLoading,
  ...props
}: EndPointSelectorProps) => {
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
      prefix={<IoLocationOutline className="size-5 text-gray-700" />}
      loading={isLoading}
      defaultActiveFirstOption={false}
      filterOption={false}
      className="w-full"
      options={provinces?.map((item: ProvinceItem) => ({
        key: item?.id,
        label: item.name,
        value: item?.name,
      }))}
      disabled={isLoading}
      showSearch
      allowClear
      onSearch={handleSearch}
      placeholder="Chọn điểm đến..."
      size="large"
      notFoundContent={
        isLoading ? (
          'Đang tải...'
        ) : (
          <Empty description="Không tìm thấy điểm đến" />
        )
      }
      onDropdownVisibleChange={handleDropdownVisibleChange}
      dropdownRender={(menu) => renderDropdown(menu, isLoading)}
    />
  );
};
