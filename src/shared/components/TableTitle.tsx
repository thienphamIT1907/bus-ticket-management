import { Typography } from 'antd';
import { cn } from '@/libs/tailwind.ts';

const { Text } = Typography;

type TableTitleProps = {
  className?: string;
  title?: string;
};

export const TableTitle = ({ title, className }: TableTitleProps) => (
  <>
    {title ? (
      <Text
        className={cn(
          'text-gray-light-900 text-xl font-bold',
          className && className,
        )}
      >
        {title}
      </Text>
    ) : null}
  </>
);
