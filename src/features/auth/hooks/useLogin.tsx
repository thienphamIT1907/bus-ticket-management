import { useToast } from '@/shared/hooks';
import supabase from '@/shared/utils/supbabase';
import { useState } from 'react';
import sha256 from 'crypto-js/sha256';
import CryptoJS from 'crypto-js';
import { useNavigate } from 'react-router-dom';
import type { LoginFormFields } from '@/shared/types';

export const useLogin = () => {
  const navigate = useNavigate();
  const [isLogging, setIsLogging] = useState(false);
  const { showToast } = useToast();

  const handleLogin = async ({ email, password }: LoginFormFields) => {
    setIsLogging(true);
    if (password) {
      const hashedPassword = sha256(password).toString(CryptoJS.enc.Hex);
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password: hashedPassword,
      });
      if (error) {
        showToast({
          type: 'error',
          message: 'Error',
          description: error?.message || 'Đăng nhập không hợp lệ!',
        });
      } else {
        navigate('/dashboard');
      }
    }
    setIsLogging(false);
  };

  return {
    handleLogin,
    isLogging,
  };
};
