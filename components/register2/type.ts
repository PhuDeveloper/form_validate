export interface ValueInputForm {
  userName: string;
  email: string;
  phone: string;
  password: string;
  rePassword: string;
  gender?: string;
  genderOther?: string;
  city: string;
  district: string;
  ward: string;
}

export interface RegisterInfoInterface {
  userName: string;
  email: string;
  phone: string;
  password: string;
  rePassword: string;
  gender?: string;
  genderOther?: string;
  city: string;
  district: string;
  ward: string;
}
export interface ListInfoRegisterInterface {
  register_info: RegisterInfoInterface[];
}
export interface RegisterInfoFomart{
  registerInfo:ValueInputForm[]
}
export interface FormPropsInterface {
  handleFormSubmit: (value: RegisterInfoFomart) => void;
}
export interface Address {
  areaCode: string;
  name: string;
}