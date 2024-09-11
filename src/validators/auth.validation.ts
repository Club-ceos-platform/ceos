import * as z from 'zod';

export const authSchema = z.object({
  email:z.string({
    required_error:"L'adresse e-mail est requis."
  }).email("L'adresse e-mail n'est pas valide.").min(1,"L'adresse e-mail est requis."),
  password:z.string({
    required_error:'Le mot de passe est requis.'
  }).min(8,'Le mot de passe doit contenir au moins 8 caractère')
})