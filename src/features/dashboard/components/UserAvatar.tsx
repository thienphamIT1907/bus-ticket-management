import { useLogout } from '@/features/auth/hooks/useLogout';
import { useSession } from '@/features/auth/hooks/useSession';
import { Flex, Typography } from 'antd';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import { MdOutlineLogout } from 'react-icons/md';

const { Text } = Typography;
export const UserAvatar = () => {
  const { handleLogout, isLoggingOut } = useLogout();
  const { currentUser } = useSession();

  return (
    <div className="flex items-center justify-center gap-x-1">
      <FiUser size={22} className="self-start" />
      <Flex vertical>
        <Text className="text-base font-bold">
          {currentUser?.email || '...'}
        </Text>
        <Flex gap={4} align="center" justify="flex-end">
          <Text
            className="cursor-pointer text-sm text-gray-400 hover:underline"
            onClick={handleLogout}
          >
            Logout
          </Text>
          {isLoggingOut ? (
            <AiOutlineLoading3Quarters className="animate-spin rounded-full text-gray-400 shadow-lg" />
          ) : (
            <MdOutlineLogout className="size-3 text-gray-400" />
          )}
        </Flex>
      </Flex>
    </div>
  );
};
