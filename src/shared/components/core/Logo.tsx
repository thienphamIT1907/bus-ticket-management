import { BsBusFront } from 'react-icons/bs';
import { cn } from '@/libs/tailwind.ts';

type Props = {
  className?: string;
};

export const Logo = ({ className }: Props) => (
  <BsBusFront className={cn('size-20 text-gray-200', className && className)} />
);
