import * as z from 'zod'

export const validateWithZod = (schema: z.ZodType<any>) => (values: any) => {
  try {
    schema.parse(values);
    return {};
  } catch (error: any) {
    return error.flatten().fieldErrors;
  }
};