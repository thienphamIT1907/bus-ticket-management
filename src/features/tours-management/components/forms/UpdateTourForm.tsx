import { BusInformation } from '@/features/tours-management/components/BusInformation';
import { BusSelector } from '@/features/tours-management/components/selectors/BusSelector';

import { RouteSelector } from '@/features/tours-management/components/selectors/RouteSelector';
import { useUpdateTour } from '@/features/tours-management/hooks/useUpdateTour';
import { useValidateTourFields } from '@/features/tours-management/hooks/useValidateTourFields';
import { BaseDrawer } from '@/shared/components/core/BaseDrawer';
import { DATE_TIME_FORMAT } from '@/shared/constants/datetime';
import type { Tour, Vehicle } from '@/shared/types';
import { Button, DatePicker, Flex, Form, InputNumber, Typography } from 'antd';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

const { Item } = Form;
const { Text } = Typography;

type Props = {
  isOpen: boolean;
  onClose: () => void;
  selectedTour?: Tour;
};

export const UpdateTourForm = ({ isOpen, onClose, selectedTour }: Props) => {
  const { TOUR_FORM_FIELDS } = useValidateTourFields();
  const { bus, timeToGo, route, price } = TOUR_FORM_FIELDS;
  const [selectedBus, setSelectedBus] = useState<Vehicle | undefined>(
    undefined,
  );

  const { form, handleUpdateTour, isUpdating } = useUpdateTour({
    onClose,
    selectedTour,
  });

  const onFinish = () => {
    form.validateFields().then(() => {
      handleUpdateTour();
    });
  };

  useEffect(() => {
    if (selectedTour) {
      form.setFieldsValue({
        time_to_go: dayjs(selectedTour?.time_to_go) as unknown as string,
      });
    }
  }, [form, selectedTour]);

  useEffect(() => {
    if (selectedBus) {
      form.setFieldValue.bind(form, 'bus_id');
    }
  }, [form, selectedBus]);

  useEffect(() => {
    if (selectedTour) {
      setSelectedBus(selectedTour?.buses);
    }
  }, [form, selectedTour]);

  return (
    <BaseDrawer
      afterOpenChange={(open) => {
        if (!open) {
          form.resetFields();
        }
      }}
      title={<Text className="text-2xl font-medium">Cập nhật lộ trình</Text>}
      open={isOpen}
      onClose={onClose}
      footer={
        <Flex gap={6} justify="flex-end">
          <Button
            size="large"
            type="text"
            onClick={onClose}
            disabled={isUpdating}
          >
            Huỷ
          </Button>
          <Button
            size="large"
            className="shadow-[#f3969c]' bg-[#d84f57] text-white shadow-md"
            loading={isUpdating}
            onClick={() => {
              form.submit();
            }}
          >
            Cập nhật
          </Button>
        </Flex>
      }
    >
      <Form
        layout="vertical"
        onFinish={onFinish}
        form={form}
        initialValues={{
          ...selectedTour,
          time_to_go: dayjs(selectedTour?.time_to_go),
          buses: selectedTour?.buses,
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
              format: DATE_TIME_FORMAT.DD_MM_YYYY_HH_MM_SS,
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
        <Item
          className="mt-2 flex-1"
          name={price?.name}
          label={price?.label}
          rules={price?.rules}
        >
          <InputNumber
            addonAfter="VND"
            placeholder={price?.placeholder}
            size="large"
            className="w-full"
            defaultValue={0}
          />
        </Item>
      </Form>
    </BaseDrawer>
  );
};
