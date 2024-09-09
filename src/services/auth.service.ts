import { signIn } from 'next-auth/react'
import { SignupRequestData, SignupResponseData, SigninRequestData,SigninResponseData } from "./auth.types";

export async function signup(data:SignupRequestData):Promise<SignupResponseData>{
  const response = await fetch('/api/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to sign up');
  }

  return response.json();

}

export async function signin(data: SigninRequestData): Promise<SigninResponseData> {
  const response = await signIn('credentials',{
    email:data.email,
    password:data.password,
    redirect:false
  })

  if (!response || response.error) {
    throw new Error(response?.error || 'Failed to sign in');
  }

  return response as SigninResponseData;
}