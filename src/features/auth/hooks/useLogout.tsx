import supabase from '@/shared/utils/supbabase';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useLogout = () => {
  const navigate = useNavigate();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      await supabase.auth.signOut();
      navigate('/dashboard/login', {
        replace: true,
      });
    } catch (error) {
      console.error('Error logging out:', error);
    } finally {
      setIsLoggingOut(false);
    }
  };
  return {
    handleLogout,
    isLoggingOut,
  };
};
