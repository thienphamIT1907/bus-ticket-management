import { LicenseTypesSelector } from '@/features/driver-management/components/selectors/LicenseTypesSelector';
import { YOESelector } from '@/features/driver-management/components/selectors/YOESelector';
import { useUpdateDriver } from '@/features/driver-management/hooks/useUpdateDriver';
import { useValidateDriverFields } from '@/features/driver-management/hooks/useValidateDriverFields';
import { BaseDrawer } from '@/shared/components/core/BaseDrawer';
import { DATE_TIME_FORMAT } from '@/shared/constants/datetime';
import type { Driver } from '@/shared/types';
import { Button, DatePicker, Flex, Form, Input, Typography } from 'antd';
import dayjs from 'dayjs';

const { Item } = Form;
const { Text } = Typography;

type Props = {
  isOpen: boolean;
  onClose: () => void;
  selectedDriver?: Driver;
};

export const UpdateDriverForm = ({
  isOpen,
  onClose,
  selectedDriver,
}: Props) => {
  const { DRIVER_FORM_FIELDS } = useValidateDriverFields();
  const {
    address,
    birthday,
    email,
    firstName,
    lastName,
    licenseType,
    phone,
    yoe,
  } = DRIVER_FORM_FIELDS;

  const { form, handleUpdateDriver, isUpdating } = useUpdateDriver({
    onClose,
    selectedDriver,
  });

  const onFinish = () => {
    form.validateFields().then(() => {
      handleUpdateDriver();
    });
  };

  return (
    <BaseDrawer
      afterOpenChange={(open) => {
        if (!open) {
          form.resetFields();
        }
      }}
      title={<Text className="text-2xl font-medium">Cập nhật Tài xế</Text>}
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
          ...selectedDriver,
          birthday: dayjs(selectedDriver?.birthday),
        }}
      >
        <Flex justify="space-between" align="center" gap={6}>
          <Item
            className="flex-1"
            name={lastName?.name}
            label={lastName?.label}
            rules={lastName?.rules}
          >
            <Input
              placeholder={lastName?.placeholder}
              size="large"
              allowClear
            />
          </Item>
          <Item
            className="flex-1"
            name={firstName?.name}
            label={firstName?.label}
            rules={firstName?.rules}
          >
            <Input
              placeholder={firstName?.placeholder}
              size="large"
              allowClear
            />
          </Item>
        </Flex>

        <Item
          name={birthday?.name}
          label={birthday?.label}
          rules={birthday?.rules}
        >
          <DatePicker
            placeholder={birthday?.placeholder}
            className="w-full"
            size="large"
            format={{
              format: DATE_TIME_FORMAT.DD_MM_YYYY,
              type: 'mask',
            }}
          />
        </Item>
        <Item
          name={address?.name}
          label={address?.label}
          rules={address?.rules}
        >
          <Input placeholder={address?.placeholder} size="large" allowClear />
        </Item>
        <Item name={email?.name} label={email?.label} rules={email?.rules}>
          <Input placeholder={email?.placeholder} size="large" allowClear />
        </Item>
        <Item name={phone?.name} label={phone?.label} rules={phone?.rules}>
          <Input
            placeholder={phone?.placeholder}
            size="large"
            allowClear
            maxLength={10}
          />
        </Item>
        <Item
          name={licenseType?.name}
          label={licenseType?.label}
          rules={licenseType?.rules}
        >
          <LicenseTypesSelector placeholder={licenseType?.placeholder} />
        </Item>
        <Item name={yoe?.name} label={yoe?.label} rules={yoe?.rules}>
          <YOESelector placeholder={yoe?.placeholder} />
        </Item>
      </Form>
    </BaseDrawer>
  );
};
