import * as yup from "yup";
import { IsCheckGender } from "./type";
import { useTranslation } from 'next-i18next';
export function VaLidationRegister1Form(isGender: IsCheckGender) {
  const checkGender = isGender.isGender;
    const { t } = useTranslation();
  const schema = yup.object().shape({
    userName: yup.string().required(t('common:enterName')),
    phone: yup.string().required("Nhập số đt"),
    email: yup.string().required("Nhập email").email("Email ko đúng định dạng"),
    password: yup.string().required("Nhập mật khẩu"),
    rePassword: yup
      .string()
      .label("Nhập lại mật khẩu")
      .required()
      .oneOf([yup.ref("password"), null], "Mật khẩu không trùng khớp"),
    genderOther: checkGender
      ? yup.string().required("Nhập giới tính khác")
      : yup.string(),
    city: yup.string().required("Chọn thành phố"),
    district: yup.string().required("Chọn quận huyện"),
    ward: yup.string().required("Chọn phường xã"),
  });

  return schema;
}
