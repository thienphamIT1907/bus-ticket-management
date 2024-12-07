import { useToast } from '@/shared/hooks';
import supabase from '@/shared/utils/supbabase';
import type { Session } from '@supabase/supabase-js';
import { useState, useEffect } from 'react';

export const useSession = () => {
  const { showToast } = useToast();

  const [session, setSession] = useState<Session | null>(null);
  const [isLoadingSession, setIsLoadingSession] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        setIsLoadingSession(true);
        const { data, error } = await supabase.auth.getSession();
        if (error) {
          showToast({
            type: 'error',
            message: 'Error',
            description: error?.message,
          });

          return;
        }
        setSession(data?.session);
      } finally {
        setIsLoadingSession(false);
      }
    };

    fetchSession();
  }, []);

  return { session, isLoadingSession, currentUser: session?.user };
};
