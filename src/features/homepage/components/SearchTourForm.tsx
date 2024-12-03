import { Button, Flex, Form, Tooltip } from 'antd';
import { StartPointSelector } from '@/features/homepage/components/StartPointSelector.tsx';
import { EndPointSelector } from '@/features/homepage/components/EndPointSelector.tsx';
import { useEffect, useState } from 'react';
import { cn } from '@/libs/tailwind.ts';
import { SearchTour } from '@/features/homepage/types';
import { useGetProvinces } from '@/features/homepage/hooks/useGetProvinces';

const { useForm, Item } = Form;

export const SearchTourForm = () => {
  const [form] = useForm<SearchTour>();
  const [disabled, setDisabled] = useState<boolean>(true);
  const [query, setQuery] = useState('');
  const {
    data: provinces,
    isLoading,
    refetch,
  } = useGetProvinces({
    page: 0,
    size: 100,
    query,
  });

  useEffect(() => {
    refetch();
  }, [query]);

  const onFinish = () => {
    // form
    //   .validateFields()
    //   .then(() => {
    //     setDisabled(false);
    //   })
    //   .catch(() => {
    //     setDisabled(true);
    //   });
  };

  const handleFormChange = () => {
    const formValue = form.getFieldsValue();
    setQuery(formValue?.endPoint);

    if (formValue?.endPoint && formValue.startPoint) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <Form
      form={form}
      className="w-full"
      onFinish={onFinish}
      onFieldsChange={handleFormChange}
    >
      <Flex gap={6} align="center" justify="center">
        <Item className="w-full" required name="startPoint">
          <StartPointSelector
            isLoading={isLoading}
            provinces={provinces}
            setQuery={setQuery}
          />
        </Item>
        <Item className="w-full" name="endPoint">
          <EndPointSelector
            isLoading={isLoading}
            provinces={provinces}
            setQuery={setQuery}
          />
        </Item>
        <Tooltip title={disabled && 'Vui lòng điền đủ thông tin!'}>
          <Button
            className={cn(
              'self-start border-none bg-[#8f3333] px-10 font-medium text-white outline-none',
              disabled && 'opacity-30',
            )}
            size="large"
            htmlType="submit"
            disabled={disabled}
          >
            Tìm kiếm
          </Button>
        </Tooltip>
      </Flex>
    </Form>
  );
};
