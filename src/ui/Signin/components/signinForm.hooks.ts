import { useState } from "react";
import { signIn } from "next-auth/react";
import { AuthInput,AuthOutput } from "@/typings/auth";

type UseSigninForm = {
   onSubmit:(formData:AuthInput)=>void;
   error:string | null;
   isLoading:boolean;
   success:boolean;
}

export const useSigninForm = ():UseSigninForm =>{
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const onSubmit = async (formData: AuthInput) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const result: any = await signIn('credentials',{
        email:formData.email,
        password:formData.password,
        redirect:false
      });
      if(!result.ok){
        setError(result.error);
      }

      window.location.reload();
    } catch (err: any) {
      setError(err.message || "Une erreur inattendue s'est produite.");
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