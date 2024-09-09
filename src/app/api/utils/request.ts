import { ZodError } from 'zod';
import { NextResponse } from 'next/server';

export function handleError(e: unknown) {
  if(e instanceof ZodError){
    const error = e.errors[0].message;
    return NextResponse.json({ message:error },{ status : 400 })
  }
  const message = (e instanceof Error) ? e.message : 'Unknown error';
  return NextResponse.json({
    message
  }, { status: 500 });
}
