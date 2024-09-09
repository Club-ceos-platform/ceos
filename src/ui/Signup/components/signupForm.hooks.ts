import { useState } from 'react';
import { signup } from '@/services/auth/auth.service';
import { SignupRequestData, SignupResponseData } from '@/services/auth/auth.types';

type UseSignupForm = {
  onSubmit: (formData: SignupRequestData) => void;
  error: string | null;
  isLoading: boolean;
  success: boolean;
};

export const useSignupForm = (): UseSignupForm => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const onSubmit = async (formData: SignupRequestData) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const result: SignupResponseData = await signup(formData);
      if (result) {
        setSuccess(true);
      }
    } catch (error: any) {
      setError(error.message || 'Une erreur est survenue');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    onSubmit,
    error,
    isLoading,
    success,
  };
};
