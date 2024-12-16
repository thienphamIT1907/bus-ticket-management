import { BusCapacitySelector } from '@/features/vehicle-management/components/BusCapacitySelector';
import { useCreateVehicle } from '@/features/vehicle-management/hooks/useCreateVehicle';
import { useValidateVehicleFields } from '@/features/vehicle-management/hooks/useValidateVehicleFields';
import { BaseDrawer } from '@/shared/components/core/BaseDrawer';
import { FormLabelField } from '@/shared/components/forms/FormLabelField';
import { ComfortsSelector } from '@/shared/components/selectors/ComfortsSelector';
import { CompaniesSelector } from '@/shared/components/selectors/CompaniesSelector';
import { DriverSelector } from '@/shared/components/selectors/DriverSelector';
import { TypesSelector } from '@/shared/components/selectors/TypeSelector';
import { Button, Flex, Form, Input, Typography } from 'antd';

const { Item } = Form;
const { Text } = Typography;

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const CreateVehicleForm = ({ isOpen, onClose }: Props) => {
  const { VEHICLE_FORM_FIELDS } = useValidateVehicleFields();
  const { capacity, company, driver, plateNumber, type, comforts } =
    VEHICLE_FORM_FIELDS;

  const { form, handleCreateVehicle, isCreating } = useCreateVehicle({
    onClose,
  });

  const onFinish = () => {
    form.validateFields().then((formValues) => {
      handleCreateVehicle(formValues);
    });
  };

  return (
    <BaseDrawer
      afterOpenChange={(open) => {
        if (!open) {
          form.resetFields();
        }
      }}
      title={<Text className="text-2xl font-medium">Thêm phương tiện</Text>}
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
      <Form layout="vertical" form={form} onFinish={onFinish}>
        <Item
          label={<FormLabelField value={plateNumber.label} />}
          name={plateNumber.name}
          rules={plateNumber.rules}
        >
          <Input
            size="large"
            placeholder={plateNumber.placeholder}
            maxLength={10}
            allowClear
          />
        </Item>
        <Item
          label={<FormLabelField value={capacity.label} />}
          name={capacity.name}
          rules={capacity.rules}
        >
          <BusCapacitySelector placeholder={capacity?.placeholder} />
        </Item>
        <Item
          label={<FormLabelField value={company.label} />}
          name={company.name}
          rules={company.rules}
        >
          <CompaniesSelector />
        </Item>
        <Item
          label={<FormLabelField value={driver.label} />}
          name={driver.name}
          rules={driver.rules}
        >
          <DriverSelector />
        </Item>
        <Item
          label={<FormLabelField value={type.label} />}
          name={type.name}
          rules={type.rules}
        >
          <TypesSelector />
        </Item>
        <Item
          label={<FormLabelField value={comforts?.label} />}
          name={comforts.name}
          rules={comforts.rules}
        >
          <ComfortsSelector placeholder={comforts?.placeholder} />
        </Item>
      </Form>
    </BaseDrawer>
  );
};
