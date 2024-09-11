import * as z from 'zod';

export const userSignupStepOneSchema = z.object({
  lastName: z.string({
    required_error: 'Le nom est requis.'
  }).min(1,'Le nom est requis.').max(50, 'Le nom ne doit pas dépasser 50 caractères.'),
  
  firstName: z.string({
    required_error: 'Le prénom est requis.'
  }).min(1,'Le prénom est requis.').max(50, 'Le prénom ne doit pas dépasser 50 caractères.'),

  postCode: z.string().regex(/^\d{5}$/, {
    message: "Le code postal doit contenir exactement 5 chiffres.",
  }).min(1,"Le code postal doit contenir exactement 5 chiffres."),
  
  country: z.string({
    required_error: 'Le pays est requis.'
  }).min(1,'Le pays est requis.'),
  
  city: z.string({
    required_error: 'La ville est requise.'
  }).min(1,'La ville est requise.'),
  
  email: z.string({
    required_error: 'L\'adresse e-mail est requise.'
  }).email('L\'adresse e-mail n\'est pas valide.'),
  
  phoneNumber: z.string({
    required_error: 'Le numéro de téléphone est requis.'
  }).min(1,'Le numéro de téléphone est requis.'),
  
  linkedInUrl: z.string({
    required_error: 'L\'URL LinkedIn est requise.'
  }).url('L\'URL LinkedIn est invalide.'),
  
  jobTitle: z.string({
    required_error: 'Le poste est requis.'
  }).min(1,'Le poste est requis.'),
  
})

export const userSignupStepTwoSchema = z.object({

  companyName: z.string({
    required_error: 'Le nom de l\'entreprise est requis.'
  }).min(1,"Le nom de l\'entreprise est requis."),
  
  commercialName: z.string({
    required_error: 'Le nom commercial est requis.'
  }).min(1,'Le nom commercial est requis.'),
  
  companyPostCode: z.string().regex(/^\d{5}$/, {
    message: "Le code postal doit contenir exactement 5 chiffres.",
  }).min(1,"Le code postal doit contenir exactement 5 chiffres.",),

  companyCountry: z.string({
    required_error: 'Le pays de l\'entreprise est requis.'
  }).min(1,'Le pays de l\'entreprise est requis.'),
  
  companyCity: z.string({
    required_error: 'La ville de l\'entreprise est requise.'
  }).min(1,'La ville de l\'entreprise est requise.'),
  
  companyWebsite: z.string({
    required_error: 'L\'URL du site web de l\'entreprise est requise.'
  }).url('L\'URL du site web est invalide.'),
  
  companyLinkedInPage: z.string({
    required_error: 'L\'URL LinkedIn de l\'entreprise est requise.'
  }).url('L\'URL LinkedIn de l\'entreprise est invalide.'),
  
  companyPhoneNumber: z.string({
    required_error: 'Le numéro de téléphone de l\'entreprise est requis.'
  }).min(1,'Le numéro de téléphone de l\'entreprise est requis.'),
})

export const userSignupStepThreeSchema = z.object({
  revenue: z.coerce
  .number()
  .positive({ message: "Le chiffre d’affaires doit être un nombre positif" })
  .refine(
    (val) => val >= 1000,
    { message: "Le chiffre d’affaires doit être exprimé en milliers d’euros (k€)" }
  ),
  revenueFile: z
  .any()
  .refine((file) => file instanceof File && file.size > 0, {
    message: "Veuillez télécharger un fichier justificatif pour le chiffre d'affaires.",
  }),
})

export const userSchema = userSignupStepOneSchema
  .merge(userSignupStepTwoSchema)
  .extend({
    revenue: z.number({
      required_error: 'Le chiffre d\'affaires est requis.'
    }).min(1000, 'Le chiffre d\'affaires doit être supérieur à 1000.'),
    paymentUrl: z.string({
      required_error: 'L\'URL de paiement est requise.'
    }).url('L\'URL de paiement est invalide.'),
    revenueFileUrl: z.string({
      required_error: 'Le fichier de revenu est requis.',
    }).min(1,'Le fichier de revenu est requis.'),
  });