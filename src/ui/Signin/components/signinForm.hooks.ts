import { useState } from "react";
// import { useRouter } from "next/router";
import { signin } from "@/services/auth/auth.service";
import { SigninRequestData, SigninResponseData  } from "@/services/auth/auth.types"

type UseSigninForm = {
   onSubmit:(formData:SigninRequestData)=>void;
   error:string | null;
   isLoading:boolean;
   success:boolean;
}

export const useSigninForm = ():UseSigninForm =>{
  // const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const onSubmit = async (formData: SigninRequestData) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const result: SigninResponseData = await signin(formData);
      console.log(result);

      if (result.token) {
        localStorage.setItem('authToken', result.token);

        setSuccess(true);
        // router.push('/dashboard');
      } else {
        setError('Failed to sign in. Please check your credentials.');
      }
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    onSubmit,
    error,
    isLoading,
    success
  }
}