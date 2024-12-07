import { LoginForm } from '@/shared/components/forms/LoginForm';
import { Logo } from '@/shared/components/core/Logo';
import { Flex, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useSession } from '@/features/auth/hooks/useSession';
import { LoadingPanel } from '@/shared/components/LoadingPanel';
import { useEffect } from 'react';

const { Text } = Typography;

export const LoginPage = () => {
  const navigate = useNavigate();
  const { session, isLoadingSession } = useSession();

  useEffect(() => {
    if (session) {
      navigate('/dashboard', {
        replace: true,
      });
    }
  }, [session]);

  return (
    <>
      {isLoadingSession ? (
        <LoadingPanel />
      ) : (
        <div className="flex h-screen items-center justify-center">
          <div className="hidden h-screen w-1/2 lg:block">
            <img
              src="/assets/images/login-cover-2.avif"
              alt="Placeholder Image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="sm:20 w-full p-8 md:p-52 lg:w-1/2 lg:p-36">
            <Flex vertical justify="center" align="center" gap={10}>
              <Flex justify="center" align="center" vertical gap={10}>
                <Logo className="size-24 text-[#c35959]" />
                <Text className="text-3xl font-bold text-[#c35959]">
                  CS447ABus
                </Text>
              </Flex>
              <LoginForm />
            </Flex>
          </div>
        </div>
      )}
    </>
  );
};
