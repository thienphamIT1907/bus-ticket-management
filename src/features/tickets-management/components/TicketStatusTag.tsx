import { cn } from '@/libs/tailwind';
import { TicketStatus } from '@/shared/types';
import { upperCaseFirstLetter } from '@/shared/utils';

type Props = {
  status: TicketStatus;
  className?: string;
};

const TicketStatusStyle = {
  [TicketStatus.Ordered]: 'bg-blue-50 border-blue-200 text-blue-600',
  [TicketStatus.Cancelled]: 'bg-gray-50 border-gray-200 text-gray-600',
  [TicketStatus.Finish]: 'bg-green-50 border-green-200 text-green-600',
  [TicketStatus.Checkin]: 'bg-purple-50 border-purple-200 text-purple-600',
};

export const TicketStatusTag = ({ status, className }: Props) => (
  <div
    className={cn(
      'rounded-lg border border-solid px-2 text-center font-medium',
      TicketStatusStyle[status],
      className && className,
    )}
  >
    {upperCaseFirstLetter(status)}
  </div>
);
