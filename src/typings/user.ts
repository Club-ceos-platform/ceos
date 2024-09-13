export type UserInput = {
  lastName: string;
  firstName: string;
  country: string;
  city: string;
  postCode: string;
  email: string;
  phoneNumber: string;
  linkedInUrl: string;
  jobTitle: string;
  companyName: string;
  commercialName: string;
  companyCountry: string;
  companyCity: string;
  companyPostCode: string;
  companyWebsite: string;
  companyLinkedInPage: string;
  companyPhoneNumber: string;
  revenue: number;
  paymentUrl: string;
  revenueFileUrl: string
};


export type UserOutput = {
  id: number;
  lastName: string;
  firstName: string;
  postCode: string;
  country: string;
  city: string;
  email: string;
  phoneNumber: string;
  linkedInUrl: string;
  jobTitle: string;
  companyName: string;
  commercialName: string;
  companyCountry: string;
  companyCity: string;
  companyPostCode: string;
  companyWebsite: string;
  companyLinkedInPage: string;
  companyPhoneNumber: string;
  revenue: number;
  revenueFileUrl: string;
  isValidatedByAdmin: boolean;
  paymentUrl: string;
  hasPaid: boolean;
}