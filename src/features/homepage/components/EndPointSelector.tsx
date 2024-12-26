import type { SelectProps } from 'antd';
import { Empty, Select } from 'antd';
import { debounce } from 'lodash-es';
import { IoLocationOutline } from 'react-icons/io5';
import type { ProvinceItem } from '@/features/homepage/types';
import { renderDropdown } from '@/features/homepage/helpers';
import { FaCheck } from 'react-icons/fa6';

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
        value: item?.slug,
      }))}
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
      menuItemSelectedIcon={<FaCheck className="size-5 text-green-600" />}
    />
  );
};
