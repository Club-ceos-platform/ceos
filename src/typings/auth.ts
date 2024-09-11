export type AuthInput ={
  email:string;
  password:string;
}

export type AuthOutput = {
  id:number;
  lastName:string;
  firstName:string;
  postCode:string;
  country:string;
  city:string;
  email:string;
  phoneNumber:string;
  linkedInUrl:string;
  jobTitle:string;
  companyName:string;
  commercialName:string;
  companyCountry:string;
  companyCity:string;
  companyPostCode:string;
  companyWebsite:string;
  companyLinkedInPage:string;
  companyPhoneNumber:string;
  revenue:number;
  revenueFileUrl:string;
}