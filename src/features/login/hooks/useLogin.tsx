import { LoginFormFields } from '@/features/login/components/LoginForm';
import supabase from '@/shared/utils/supbabase';

type Props = {} & LoginFormFields;

export const useLogin = ({ username, password }: Props) => {
  const handleLogin = async () => {
    const { user, error } = await supabase.auth.signInWithPassword({
      email: username,
      password,
    });

    if (error) {
      console.error('Error logging in:', error.message);
    } else {
      console.log('Logged in user:', user);
    }
  };

  return <div>useLogin</div>;
};
