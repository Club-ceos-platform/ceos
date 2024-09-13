import { useState } from "react";
import { signIn } from "next-auth/react";
import { AuthInput } from "@/typings/auth";

type UseSigninForm = {
   onSubmit:(formData:AuthInput)=>void;
   isLoading:boolean;
   success:boolean;
   error:string | null;
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

      if(result.ok){
        window.location.reload();
      }

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