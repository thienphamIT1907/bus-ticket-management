import { EndPointSelector } from '@/features/homepage/components/EndPointSelector';
import { StartPointSelector } from '@/features/homepage/components/StartPointSelector';
import { useGetProvinces } from '@/features/homepage/hooks/useGetProvinces';
import { useCreateBusRoute } from '@/features/routes-management/hooks/useCreateBusRoute';
import { useValidateBusRouteFields } from '@/features/routes-management/hooks/useValidateBusRouteFields';
import { BaseDrawer } from '@/shared/components/core/BaseDrawer';
import { FormLabelField } from '@/shared/components/forms/FormLabelField';
import { Button, Flex, Form, InputNumber, Typography } from 'antd';
import { useEffect, useState } from 'react';

const { Item } = Form;
const { Text } = Typography;

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const CreateRouteForm = ({ isOpen, onClose }: Props) => {
  const { BUS_ROUTES_FORM_FIELDS } = useValidateBusRouteFields();
  const { estDistance, estTime, startPoint, endPoint } = BUS_ROUTES_FORM_FIELDS;
  const [query, setQuery] = useState('');
  const [isDisableEndpoint, setIsDisableEndpoint] = useState(true);

  const {
    data: provinces,
    isLoading,
    refetch,
  } = useGetProvinces({
    page: 0,
    size: 100,
    query,
  });
  const [endpointProvince, setEndpointProvince] = useState(provinces);

  useEffect(() => {
    refetch();
    setEndpointProvince(provinces);
  }, [query]);

  const { form, handleCreateBusRoute, isCreating } = useCreateBusRoute({
    onClose,
    provinces,
  });

  const onFinish = () => {
    form.validateFields().then((formValues) => {
      handleCreateBusRoute(formValues);
    });
  };

  const onFieldChanges = () => {
    const formValues = form.getFieldsValue();
    if (formValues?.start_point) {
      setIsDisableEndpoint(false);
      const filteredEndpointProvince = provinces?.filter(
        (province) => province?.slug !== formValues?.start_point,
      );
      setEndpointProvince(filteredEndpointProvince);
    } else {
      setIsDisableEndpoint(true);
    }
    if (formValues?.start_point === formValues?.end_point) {
      form.setFieldsValue({
        end_point: undefined,
      });
    }
  };

  return (
    <BaseDrawer
      afterOpenChange={(open) => {
        if (!open) {
          form.resetFields();
        }
      }}
      title={<Text className="text-2xl font-medium">Thêm tuyến đường</Text>}
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
            onClick={() => form.submit()}
          >
            Thêm
          </Button>
        </Flex>
      }
    >
      <Form
        layout="vertical"
        form={form}
        onFinish={onFinish}
        onFieldsChange={onFieldChanges}
      >
        <Item
          label={<FormLabelField value={startPoint.label} />}
          name={startPoint.name}
          rules={startPoint.rules}
        >
          <StartPointSelector
            showSearch={false}
            isLoading={isLoading}
            provinces={provinces}
            setQuery={setQuery}
            allowClear
          />
        </Item>
        <Item
          label={<FormLabelField value={endPoint.label} />}
          name={endPoint.name}
          rules={endPoint.rules}
          shouldUpdate
        >
          <EndPointSelector
            showSearch={false}
            isLoading={isLoading}
            provinces={endpointProvince}
            setQuery={setQuery}
            allowClear
            disabled={isDisableEndpoint}
          />
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
