export interface ValueInputForm {
    userName?: string;
    email: string;
    phone: string;
    password: string;
    rePassword: string;
    genderOther?: string;
    city?: string;
    district?: string;
    ward?: string;
    gender?: string;
  }
  export interface RegisterInfoFomart{
    registerInfo:ValueInputForm[]
  }