import type { SelectProps } from 'antd';
import { Empty, Select } from 'antd';
import { debounce } from 'lodash-es';
import { BiTargetLock } from 'react-icons/bi';
import type { ProvinceItem } from '@/features/homepage/types';
import { renderDropdown } from '@/features/homepage/helpers';

type StartPointSelectorProps = {
  provinces?: ProvinceItem[];
  isLoading: boolean;
  setQuery: (query: string) => void;
} & SelectProps;

export const StartPointSelector = ({
  provinces,
  setQuery,
  isLoading,
  ...props
}: StartPointSelectorProps) => {
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
      options={provinces?.map(({ name, id }) => ({
        key: id,
        label: name,
        value: name,
      }))}
      disabled={isLoading}
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
      dropdownRender={(menu) => renderDropdown(menu, isLoading)}
    />
  );
};
