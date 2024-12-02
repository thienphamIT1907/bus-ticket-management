import { Image } from 'antd';
import { RiUser3Line } from 'react-icons/ri';
import { FiUser } from 'react-icons/fi';
export const UserAvatar = () => {
  const hasAvatar = true;
  return (
    <div className="flex items-center justify-center gap-x-2">
      {!hasAvatar ? (
        <Image
          alt="avatar"
          height={40}
          src={'/assets/mock-avatar-2.png'}
          width={40}
        />
      ) : (
        <FiUser size={25} />
      )}

      <div className="leading-6">
        <p className="font-medium">Thien Pham</p>
        <p className="text-xs text-gray-400">thienpham@gmail.com</p>
      </div>
    </div>
  );
};
