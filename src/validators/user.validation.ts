import * as z from 'zod';

export const userSchema = z.object({
  lastName: z.string({
    required_error: 'Le nom est requis.'
  }).max(50, 'Le nom ne doit pas dépasser 50 caractères.'),
  
  firstName: z.string({
    required_error: 'Le prénom est requis.'
  }).max(50, 'Le prénom ne doit pas dépasser 50 caractères.'),
  
  country: z.string({
    required_error: 'Le pays est requis.'
  }),
  
  city: z.string({
    required_error: 'La ville est requise.'
  }),
  
  email: z.string({
    required_error: 'L\'adresse e-mail est requise.'
  }).email('L\'adresse e-mail n\'est pas valide.'),
  
  phoneNumber: z.string({
    required_error: 'Le numéro de téléphone est requis.'
  }),
  
  linkedInUrl: z.string({
    required_error: 'L\'URL LinkedIn est requise.'
  }).url('L\'URL LinkedIn est invalide.'),
  
  jobTitle: z.string({
    required_error: 'Le poste est requis.'
  }),
  
  companyName: z.string({
    required_error: 'Le nom de l\'entreprise est requis.'
  }),
  
  commercialName: z.string({
    required_error: 'Le nom commercial est requis.'
  }),
  
  companyCountry: z.string({
    required_error: 'Le pays de l\'entreprise est requis.'
  }),
  
  companyCity: z.string({
    required_error: 'La ville de l\'entreprise est requise.'
  }),
  
  companyWebsite: z.string({
    required_error: 'L\'URL du site web de l\'entreprise est requise.'
  }).url('L\'URL du site web est invalide.'),
  
  companyLinkedInPage: z.string({
    required_error: 'L\'URL LinkedIn de l\'entreprise est requise.'
  }).url('L\'URL LinkedIn de l\'entreprise est invalide.'),
  
  companyPhoneNumber: z.string({
    required_error: 'Le numéro de téléphone de l\'entreprise est requis.'
  }),
  
  revenue: z.number({
    required_error: 'Le chiffre d\'affaires est requis.'
  }).min(1000, 'Le chiffre d\'affaires doit être supérieur à 1000.'),
  
  revenueFile: z.string({
    required_error: 'Le fichier de revenu est requis.',
    invalid_type_error: 'Le fichier de revenu doit être une chaîne de caractères.'
  }),
  
  paymentUrl: z.string({
    required_error: 'L\'URL de paiement est requise.'
  }).url('L\'URL de paiement est invalide.')
});
