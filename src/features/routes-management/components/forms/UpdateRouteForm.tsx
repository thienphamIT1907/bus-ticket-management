import { useUpdateBusRoute } from '@/features/routes-management/hooks/useUpdateBusRoute';
import { useValidateBusRouteFields } from '@/features/routes-management/hooks/useValidateBusRouteFields';
import { BaseDrawer } from '@/shared/components/core/BaseDrawer';
import { FormLabelField } from '@/shared/components/forms/FormLabelField';
import type { BusRoute } from '@/shared/types';
import { Button, Flex, Form, Input, InputNumber, Typography } from 'antd';

const { Item } = Form;
const { Text } = Typography;

type Props = {
  isOpen: boolean;
  onClose: () => void;
  selectedRoute?: BusRoute;
};

export const UpdateRouteForm = ({ isOpen, onClose, selectedRoute }: Props) => {
  const { BUS_ROUTES_FORM_FIELDS } = useValidateBusRouteFields();
  const { estDistance, estTime, startPoint, endPoint } = BUS_ROUTES_FORM_FIELDS;

  const { form, handleUpdateBusRoute, isUpdating } = useUpdateBusRoute({
    onClose,
    selectedRoute,
  });

  const onFinish = () => {
    form.validateFields().then(() => {
      handleUpdateBusRoute();
    });
  };

  return (
    <BaseDrawer
      afterOpenChange={(open) => {
        if (!open) {
          form.resetFields();
        }
      }}
      title={<Text className="text-2xl font-medium">Cập nhật tuyến đường</Text>}
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
            onClick={() => form.submit()}
          >
            Cập nhật
          </Button>
        </Flex>
      }
    >
      <Form
        layout="vertical"
        form={form}
        onFinish={onFinish}
        initialValues={selectedRoute}
      >
        <Item
          label={<FormLabelField value={startPoint.label} />}
          name={startPoint.name}
          rules={startPoint.rules}
        >
          <Input size="large" placeholder={startPoint.placeholder} allowClear />
        </Item>
        <Item
          label={<FormLabelField value={endPoint.label} />}
          name={endPoint.name}
          rules={endPoint.rules}
        >
          <Input size="large" placeholder={endPoint.placeholder} allowClear />
        </Item>
        <Item
          label={<FormLabelField value={estDistance.label} />}
          name={estDistance.name}
          rules={estDistance.rules}
        >
          <InputNumber
            size="large"
            placeholder={estDistance.placeholder}
            className="w-full"
            suffix="km"
            precision={2}
            min={0}
          />
        </Item>
        <Item
          label={<FormLabelField value={estTime.label} />}
          name={estTime.name}
          rules={estTime.rules}
        >
          <InputNumber
            size="large"
            placeholder={estTime.placeholder}
            className="w-full"
            suffix="giờ"
            precision={2}
            min={0}
          />
        </Item>
      </Form>
    </BaseDrawer>
  );
};
