import { Typography } from 'antd';

const { Text } = Typography;

type Props = {
  value?: string;
};

export const FormLabelField = ({ value }: Props) => (
  <Text className="text-base font-medium">{value ? value : null}</Text>
);
