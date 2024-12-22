import { BusInformation } from '@/features/tours-management/components/BusInformation';
import { BusSelector } from '@/features/tours-management/components/selectors/BusSelector';

import { RouteSelector } from '@/features/tours-management/components/selectors/RouteSelector';
import { useCreateTour } from '@/features/tours-management/hooks/useCreateTour';
import { useValidateTourFields } from '@/features/tours-management/hooks/useValidateTourFields';
import { BaseDrawer } from '@/shared/components/core/BaseDrawer';
import { DATE_TIME_FORMAT } from '@/shared/constants/datetime';
import type { Vehicle } from '@/shared/types';
import { Button, DatePicker, Flex, Form, Typography } from 'antd';
import { useState } from 'react';

const { Item } = Form;
const { Text } = Typography;

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const CreateTourForm = ({ isOpen, onClose }: Props) => {
  const { TOUR_FORM_FIELDS } = useValidateTourFields();
  const { bus, timeToGo, route } = TOUR_FORM_FIELDS;
  const [selectedBus, setSelectedBus] = useState<Vehicle | undefined>(
    undefined,
  );

  const { form, handleCreateTour, isCreating } = useCreateTour({
    onClose,
  });

  const onFinish = () => {
    form.validateFields().then((formValues) => {
      handleCreateTour(formValues);
    });
  };

  // useEffect(() => {
  //   if (selectedBus) {
  //     form.setFieldValue.bind(form, 'bus_id');
  //   }
  // }, [form, selectedBus]);

  return (
    <BaseDrawer
      afterOpenChange={(open) => {
        if (!open) {
          form.resetFields();
        }
      }}
      title={<Text className="text-2xl font-medium">Thêm Lộ Trình</Text>}
      open={isOpen}
      onClose={onClose}
      footer={
        <Flex gap={6} justify="flex-end">
          <Button
            size="large"
            type="text"
            onClick={onClose}
            disabled={isCreating}
          >
            Huỷ
          </Button>
          <Button
            size="large"
            className="shadow-[#f3969c]' bg-[#d84f57] text-white shadow-md"
            loading={isCreating}
            onClick={() => {
              form.submit();
            }}
          >
            Thêm
          </Button>
        </Flex>
      }
    >
      <Form
        layout="vertical"
        onFinish={onFinish}
        form={form}
        onFieldsChange={() => {
          form.setFieldValue.bind(form, 'bus_id');
        }}
      >
        <Item name={route?.name} label={route?.label} rules={route?.rules}>
          <RouteSelector placeholder={route?.placeholder} />
        </Item>
        <Item
          name={timeToGo?.name}
          label={timeToGo?.label}
          rules={timeToGo?.rules}
        >
          <DatePicker
            showTime
            placeholder={timeToGo?.placeholder}
            className="w-full"
            size="large"
            format={{
              format: DATE_TIME_FORMAT.DD_MM_YYYY_HH_MM_SS,
              type: 'mask',
            }}
          />
        </Item>
        <Item label="Thời gian đến dự kiến" rules={timeToGo?.rules} hidden>
          <DatePicker
            showTime
            placeholder={timeToGo?.placeholder}
            className="w-full"
            size="large"
            format={{
              format: DATE_TIME_FORMAT.DD_MM_YYYY,
              type: 'mask',
            }}
          />
        </Item>
        <Item
          className="flex-1"
          name={bus?.name}
          label={bus?.label}
          rules={bus?.rules}
        >
          <BusSelector
            placeholder={bus?.placeholder}
            setSelectedBus={setSelectedBus}
          />
        </Item>
        <BusInformation selectedBus={selectedBus} />
      </Form>
    </BaseDrawer>
  );
};
