export interface ValueInputForm {
  userName?: string;
  email: string;
  phone: string;
  password: string;
  rePassword: string;
  genderOther?: string;
  city: string;
  district: string;
  ward: string;
  gender?: string;
}

export interface Address {
  areaCode: string;
  name: string;
}

export interface FormPropsInterface {
  handleFormSubmit: (value: ValueInputForm) => void;
}

export interface IsCheckGender{
  isGender:boolean;

}

